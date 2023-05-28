import React from 'react';
import Menuitem from '../menuitem/Menuitem';
import Cover from '../../Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, img, text }) => {
    return (
        <div className="pt-16">
            {title && <Cover img={img} title={title} text={text} > </Cover >
            }

            <div className="grid md:grid-cols-2 gap-10 mt-10">
                {
                    items.map(item => <Menuitem
                        key={item._id}
                        item={item}
                    ></Menuitem>)
                }


            </div>
            <div className=" mx-auto text-center">
                <Link to={`/shop/${title}`}>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">ORDER YOUR FAVOURITE FOOD</button>
                </Link>

            </div>
        </div>
    );
};

export default MenuCategory;
