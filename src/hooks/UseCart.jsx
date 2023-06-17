import { useContext, useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query'

import UseAuth from "./UseAuth";
import useAxiosSecure from "./UseAxiossecure";
const UseCart = () => {
    const { user, loading } = UseAuth();
    // const token = localStorage.getItem('access-token')
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,

        // queryFn: async () => {
        //     const response = await fetch(`https://bistro-boss-server-sakibbiswas.vercel.app/carts?email=${user.email}`, {
        //         headers: {
        //             authorization: `Bearer ${token}`
        //         }
        //     })
        //     const data = await response.json()
        //     console.log(data);
        //     return data;
        // }
        queryFn: async () => {
            const response = await axiosSecure(`/carts?email=${user.email}`
            )
            console.log('res from axios', response);
            return response.data;
        }
    })
    return [cart, refetch]
};

export default UseCart;