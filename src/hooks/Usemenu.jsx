// import { Query, useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react"

import { useQuery } from "@tanstack/react-query"

const Usemenu = () => {
    // const [menu, setmenu] = useState([])
    // const [loading, setloading] = useState(true)
    // useEffect(() => {
    //     fetch('http://localhost:4000/menu')
    //         .then(res => res.json())
    //         .then(data => {

    //             setmenu(data)
    //             setloading(false)
    //         })
    // }, [])
    const { data: menu = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['menu'],

        queryFn: async () => {
            const response = await fetch('http://localhost:4000/menu')
            return response.json()

        }
    })
    return [menu, loading, refetch]
}
export default Usemenu;