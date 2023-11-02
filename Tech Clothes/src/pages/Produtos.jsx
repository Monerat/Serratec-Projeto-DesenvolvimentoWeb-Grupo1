import { useState } from "react"
import CardProdutos from "../Components/CardProdutos"

const Produtos = () => {
    const [produtos, setProdutos] = useState([])

    const getProdutos = async () => {
        const response = await api.get('/produtos')
        setProdutos(response.data)
    }
    return(
        <>
        <CardProdutos />
        {produtos.map(
            ({  nome, preco, id, img }) => (
                <CardProdutos
                    nome={nome}
                    preco={preco}
                    id={id}
                    img={img}
                    
                />
            )
        )}
        </>
    )
}

export default Produtos