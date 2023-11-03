import NavBar from "../components/Navbar"
import { useState } from "react"
import { api } from "../api/api"

const pedidos = () => {

    const [listaPedidos, setListaPedidos] = useState ([])
    const [pesquisa, setPesquisa] = useState ('')



    const handlePesquisar = (e) =>{
        e.preventDefault()
        setPedido(pedidos.filter((pedido) => produto.nome === pesquisa))
    }
}

export default Pedidos