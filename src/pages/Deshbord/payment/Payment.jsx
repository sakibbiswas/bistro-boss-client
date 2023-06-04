import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import UseCart from '../../../hooks/UseCart';
const stripePromise = loadStripe(import.meta.env.VITE_pk_Payment_gateway);
const Payment = () => {
    const [cart] = UseCart();
    // reduce calculation
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    const price = parseFloat(total.toFixed(2))
    return (
        <div className='w-full'>
            <SectionTitle subheading="Please proceed to payment" heading='Payment'></SectionTitle>


            <Elements stripe={stripePromise}>
                <CheckoutForm price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;
