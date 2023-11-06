import { useEffect, useState } from "react";
import { api } from "../api/api";
import Card from 'react-bootstrap/Card';

const CardItem = ({ idProduto, quantidade }) => {
    const [produto, setProduto] = useState({});
    var subTotal = 0;

    const getProduto = async () => {
        const response = await api.get(`/produtos/${idProduto}`);
        setProduto(response.data);
    }

    useEffect(() => {
        getProduto();
    }, [idProduto]);

    const calcularSubTotal = () => {
        subTotal = produto.preco * quantidade
        return subTotal.toFixed(2);
    }

    return (
        <div style={{ margin: '50px' }}>
            <div style={{ margin: '30px' }}>
                <Card.Img variant="top" src={produto.imgurl} style={{ width: '100%', objectFit: 'contain', maxHeight: '200px' }} />
            </div>
            <div>
                <Card.Title>{produto.nome}</Card.Title>
                <Card.Text>Valor Unitário: R${produto.preco}</Card.Text>
                <Card.Text>Quantidade: {quantidade}</Card.Text>
                <Card.Text>Subtotal do Item: R${calcularSubTotal()}</Card.Text>
            </div>
        </div>
    )
}

export default CardItem;

