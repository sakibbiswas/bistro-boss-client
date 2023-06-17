import React, { useContext } from 'react';
import { Authcontext } from '../Providers/Authprovider';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

const Sociallogin = () => {
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    console.log(location);
    const Navigate = useNavigate()
    const { googleSignIN } = useContext(Authcontext)
    const handelgoogle = () => {
        googleSignIN()
            .then(result => {
                const loggeduser = result.user;
                const saveUser = { name: loggeduser.displayName, email: loggeduser.email }
                fetch('https://bistro-boss-server-sakibbiswas.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {

                        Navigate(from, { replace: true })


                    })


            })
            .then(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className='text-center'>

                <button onClick={handelgoogle} className="btn btn-circle btn-outline">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default Sociallogin;