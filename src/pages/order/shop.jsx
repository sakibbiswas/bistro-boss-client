import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Cover/Cover';
import ShopImg from '../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Usemenu from '../../hooks/Usemenu';
import Foodcard from '../foodcard/Foodcard';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
const Shop = () => {

    const [menu] = Usemenu();
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Shop</title>
            </Helmet>
            <Cover img={ShopImg} title='Our Shop' text='Would you like to try a Dish'> </Cover>
            <div className="text-center mt-6">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>


                    <TabPanel>
                        <OrderTab items={salad}></OrderTab>
                    </TabPanel>

                    <TabPanel>
                        <OrderTab items={pizza}></OrderTab>
                    </TabPanel>

                    <TabPanel>
                        <OrderTab items={soup}></OrderTab>
                    </TabPanel>

                    <TabPanel>
                        <OrderTab items={dessert}></OrderTab>
                    </TabPanel>

                    <TabPanel>
                        <OrderTab items={drinks}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Shop;