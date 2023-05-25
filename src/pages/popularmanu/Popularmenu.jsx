import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import Menuitem from '../menuitem/Menuitem';
import Usemenu from '../../hooks/Usemenu';

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

                <button className="btn btn-outline border-0 border-b-4 mt-4">view full menu</button>
            </div>
        </section>
    );
};

export default Popularmenu;