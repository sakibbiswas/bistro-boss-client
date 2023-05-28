import React from 'react';
import Usemenu from '../../hooks/Usemenu';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import CardCHEF from '../CardCHEF/CardCHEF';

const ChefCard = () => {
    const [menu] = Usemenu()
    const salad = menu.filter(item => item.category === 'salad')
    const Slicesalad = salad.slice(0, 3)
    return (
        <div>
            <SectionTitle subheading='Should try' heading='CHEF RECOMMENDS'></SectionTitle>
            <div className="grid md:grid-cols-3 gap-10 mt-10">
                {
                    Slicesalad.map(item => <CardCHEF
                        key={item._id}
                        item={item}
                    ></CardCHEF>)
                }


            </div>
        </div>
    );
};

export default ChefCard;