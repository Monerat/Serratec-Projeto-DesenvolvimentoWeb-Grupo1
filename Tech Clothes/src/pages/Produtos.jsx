import { useEffect, useState } from "react"
import CardProduto from "../components/CardProduto"
import { api } from "../api/api"

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
        {produtos.map(
            ({  nome, quantidade, id, imgurl}) => (
                <CardProduto
                    nome={nome}
                    quantidade={quantidade}
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