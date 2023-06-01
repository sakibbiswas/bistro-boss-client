import React, { useContext, useEffect, useRef, useState } from 'react';
import login from '../../assets/others/authentication1.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Sociallogin from '../sociallogin/Sociallogin';
import { Authcontext } from '../Providers/Authprovider';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async';
const Login = () => {

    const [disabled, setdisabled] = useState(true)
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handelValidateCaptcha = e => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value) == true) {
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Captcha Matched',
                showConfirmButton: false,
                timer: 1500
            })
            // alert('Captcha Matched');
            setdisabled(false)
        }

        else {
            alert('Captcha Does Not Match');
            setdisabled(true)
        }
    }

    const { signIn } = useContext(Authcontext)
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    console.log(location);
    const Navigate = useNavigate()
    const handellogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // const captcha = form.captcha.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);

                Navigate(from, { replace: true })
                Swal.fire({
                    title: 'User Login Successful',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })



            })
            .catch(error => {
                console.log(error);
            })
    }
    return (

        <>

            <Helmet
            >
                <title>Bistro boss || Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row">
                    <div className="mr-12 w-1/2">

                        <img src={login} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <form onSubmit={handellogin} >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <LoadCanvasTemplate />
                                    </label>
                                    <input onBlur={handelValidateCaptcha} type="text" placeholder="Type the text above" className="input input-bordered" required />


                                </div>
                                <div className="form-control mt-4">

                                    <input disabled={disabled} className="btn btn-primary" type="submit" value="login" />
                                </div>
                            </form>
                            <p className='my-4 text-center'>New to bistro boss <Link className='text-orange-500 font-bold' to='/signup'>Sign Up</Link></p>
                            <Sociallogin></Sociallogin>
                        </div>
                    </div>
                </div>
            </div></>
    );
};

export default Login;