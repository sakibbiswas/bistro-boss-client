import { useContext, useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query'
import { Authcontext } from "../Components/Providers/Authprovider";
const UseCart = () => {
    const { user } = useContext(Authcontext)
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:4000/carts?email=${user.email}`)
            return response.json()
        }
    })
    return [cart, refetch]
};

export default UseCart;