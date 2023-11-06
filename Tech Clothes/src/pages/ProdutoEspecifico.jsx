import { useEffect, useState } from "react"
import { api } from "../api/api"
import NavBar from "../components/Navbar"
import CardProdutoEspecifico from "../components/CardProdutoEspecifico";
import { useParams } from "react-router-dom";



const ProdutoEspecifico = () => {
    const [produtos, setProdutos] = useState([])

    const { id } = useParams()

    const getProdutos = async () => {
        const response = await api.get(`/produtos/${id}`)
        setProdutos(response.data)
    }

    useEffect(() => {
        getProdutos()
    }, [])

    return (
        <>
            <NavBar />
            <CardProdutoEspecifico
                nome={produtos.nome}
                preco={produtos.preco}
                id={produtos.id}
                getProdutos={getProdutos}
                imgurl={produtos.imgurl}
                descricao={produtos.descricao}
                favoritos={produtos.favoritos}
                deslikes={produtos.deslikes}
                estoque={produtos.estoque}
                categoria={produtos.categoria}
            />
        </>
    )
}
export default ProdutoEspecifico