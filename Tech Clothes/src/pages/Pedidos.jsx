import { api } from "../api/api"
import NavBar from "../components/Navbar"
import { useEffect, useState, useContext } from "react"
import CardPedido from "../components/CardPedido"
import { Context } from "../context/Context"
import Card from 'react-bootstrap/Card';
import CardItem from "../components/CardItem"

const Pedidos = () => {
    const [pedidos, setPedidos] = useState([])
    const { usuario } = useContext(Context)

    const getPedidos = async () => {
        const response = await api.get('/pedidos')
        const pedidosFiltrados = response.data.filter((pedido) => pedido.idUser === usuario[0].id)
        setPedidos(pedidosFiltrados)
    }

    useEffect(() => {
        getPedidos()
    }, [])

    return (
        <>
            <NavBar />
            
            {pedidos.map(
                ({ id, valorTotal, idUser, itens }) => (
                    <CardPedido
                        id={id}
                        valorTotal={valorTotal}
                        idUser={idUser}
                        itens={itens}
                    />
                )
            )}
        </>
    )
}

export default Pedidos