// import { Query, useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react"

import { useQuery } from "@tanstack/react-query"

const Usemenu = () => {
    // const [menu, setmenu] = useState([])
    // const [loading, setloading] = useState(true)
    // useEffect(() => {
    //     fetch('https://bistro-boss-server-sakibbiswas.vercel.app/menu')
    //         .then(res => res.json())
    //         .then(data => {

    //             setmenu(data)
    //             setloading(false)
    //         })
    // }, [])
    const { data: menu = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['menu'],

        queryFn: async () => {
            const response = await fetch('https://bistro-boss-server-sakibbiswas.vercel.app/menu')
            return response.json()

        }
    })
    return [menu, loading, refetch]
}
export default Usemenu;