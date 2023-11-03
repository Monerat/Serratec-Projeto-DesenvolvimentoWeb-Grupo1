import { api } from "../api/api"
import NavBar from "../components/Navbar"
import { useEffect, useState } from "react"

const Pedidos = () =>{
    const [pedidos , setPedidos] = useState([])
    
 

    const getPedidos = async () => {
        const response = await api.get('/pedidos')
        setPedidos(response.data)

    } 
    useEffect(() => {
        getProdutos()
    }, [])
 

    return (
    <>
    
    </>
    )
} 

    
