import { api } from "../api/api"
import NavBar from "../components/Navbar"
import { useEffect, useState } from "react"
import CardPedido from "../components/CardPedido"

const Pedidos = () =>{
    const [pedidos , setPedidos] = useState([])

    const getPedidos = async () => {
        const response = await api.get('/pedidos')
        //quando o context do usuario estiver pronto, filtrar os pedidos pelo id do usuario logado.
        setPedidos(response.data)

    }

    useEffect(() => {
        getPedidos()
    }, [])

    return (
    <>
        <NavBar />
        
        {pedidos.map(
            ({ id, valorTotal, idUser, itens}) => (
                <CardPedido
                    id={id}
                    valorTotal = {valorTotal}
                    idUser = {idUser}
                    itens = {itens}
                />
            )
        )}
    </>
    )
} 

export default Pedidos