import { api } from "../api/api"
import NavBar from "../components/Navbar"
import { useEffect, useState, useContext } from "react"
import CardPedido from "../components/CardPedido"
import { Context } from "../context/Context"
import { useNavigate } from "react-router-dom";

const Pedidos = () => {
    const [pedidos, setPedidos] = useState([])
    const { usuario, usuarioLogado } = useContext(Context)
    const navigate = useNavigate()

    const getPedidos = async () => {
        if (usuarioLogado) {
            const response = await api.get('/pedidos')
            const pedidosFiltrados = response.data.filter((pedido) => pedido.idUser === usuario[0].id)
            setPedidos(pedidosFiltrados)
        } else {
            navigate("/")
        }
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