import React from 'react';
import { Helmet, } from 'react-helmet-async';
import menuImg from '../../assets/menu/banner3.jpg'
import menuImg1 from '../../assets/menu/dessert-bg.jpeg'
import menuImg2 from '../../assets/menu/pizza-bg.jpg'
import menuImg3 from '../../assets/menu/salad-bg.jpg'
import menuImg4 from '../../assets/menu/soup-bg.jpg'
import Cover from '../../Cover/Cover';
import Usemenu from '../../hooks/Usemenu';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import { useParams } from 'react-router-dom';

const Menu = () => {
    const [menu] = Usemenu();


    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Menu</title>
            </Helmet>
            <Cover img={menuImg} title='Our Menu' text='Would you like to try a dish'> </Cover>
            <SectionTitle subheading="Don't mis"
                heading='TODAYS OFFER'></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory
                title="dessert"
                items={dessert}
                img={menuImg1}
                text="'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'"
            ></MenuCategory>

            <MenuCategory
                title="pizza"
                items={pizza}
                img={menuImg2}
                text="'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'"
            ></MenuCategory>
            <MenuCategory
                title="salad"
                items={salad}
                img={menuImg3}
                text="'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'"
            ></MenuCategory>


            <MenuCategory
                title="soup"
                items={soup}
                img={menuImg4}
                text="'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'"
            ></MenuCategory>

        </div>
    );
};

export default Menu;

