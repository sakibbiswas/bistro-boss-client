import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import Menuitem from '../menuitem/Menuitem';
import Usemenu from '../../hooks/Usemenu';
import { Link } from 'react-router-dom';

const Popularmenu = () => {
    const [menu] = Usemenu()
    const popular = menu.filter(item => item.category === 'popular')
    // const [menu, setmenu] = useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular')
    //             setmenu(popularItems)
    //         })
    // }, [])
    return (
        <section>
            <SectionTitle
                subheading={'Check it out'}
                heading={'FROM OUR MENU'}
            >

            </SectionTitle>

            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <Menuitem
                        key={item._id}
                        item={item}
                    ></Menuitem>)
                }
            </div>
            <div className='text-center'>

                <Link to='/menu'>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">view full menu</button>
                </Link>
            </div>

            <div className="hero mt-10 mb-5" >

                <div className="hero-content hero-overlay  bg-opacity-90 bg-black md:w-[1300px] h-[200px] text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className=" text-4xl capitalize font-serif">Contact us :01388754545</h1>


                    </div>
                </div>
            </div>

        </section>
    );
};

export default Popularmenu;