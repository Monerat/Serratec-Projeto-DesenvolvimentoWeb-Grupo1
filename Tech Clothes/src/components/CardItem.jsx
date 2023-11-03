import { useEffect, useState } from "react"
import { api } from "../api/api"

const CardItem = ({ idProduto, quantidade }) => {
    const [produto, setProduto] = useState([])
    var subTotal = 0

    const getProduto = async () => {
        const response = await api.get(`/produtos/${idProduto}`)
        setProduto(response.data)
    }

    useEffect(() => {
        getProduto()
    }, [])

    const calcularSubTotal = () => {
        subTotal = produto.preco * quantidade
    }

    return (
        <div>
            <>{calcularSubTotal()}</>
            <img src={produto.imgurl} />
            <p>{produto.nome}</p>
            <p>Quantidade de produtos: {quantidade}</p>
            <p>Subtotal: R$ {subTotal}</p>
        </div>
    )
}

export default CardItem