import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Cover/Cover';
import ShopImg from '../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Usemenu from '../../hooks/Usemenu';
const Shop = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = Usemenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === ' salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Shop</title>
            </Helmet>
            <Cover img={ShopImg} title='Our Shop' text='Would you like to try a Dish'> </Cover>
            <div className="text-center">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Drinks</Tab>
                        <Tab>Desserts</Tab>
                    </TabList>


                    <TabPanel>

                    </TabPanel>

                    <TabPanel>

                    </TabPanel>

                    <TabPanel>

                    </TabPanel>

                    <TabPanel>

                    </TabPanel>

                    <TabPanel>

                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Shop;