import { useEffect, useState } from "react"
import CardProduto from "../components/CardProduto"
import { api } from "../api/api"
import NavBar from "../components/Navbar"

const Produtos = () => {
    const [produtos, setProdutos] = useState([])

    const getProdutos = async () => {
        const response = await api.get('/produtos')
        setProdutos(response.data)
    }
    
    useEffect(() => {
        getProdutos()
    }, [])

    return (
        <>
        <NavBar />
        {produtos.map(
            ({  nome, preco, id, imgurl}) => (
                <CardProduto
                    nome={nome}
                    preco={preco}
                    id={id}
                    getProdutos={getProdutos}
                    imgurl={imgurl}
                />
            )
        )}
        </>
    )
}

export default Produtos