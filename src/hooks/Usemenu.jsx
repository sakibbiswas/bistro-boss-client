import { useEffect, useState } from "react"

const Usemenu = () => {
    const [menu, setmenu] = useState([])
    const [loading, setloading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:4000/menu')
            .then(res => res.json())
            .then(data => {

                setmenu(data)
                setloading(false)
            })
    }, [])
    return [menu, loading]
}
export default Usemenu;