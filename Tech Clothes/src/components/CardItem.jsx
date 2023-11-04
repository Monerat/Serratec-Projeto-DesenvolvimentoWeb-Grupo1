import { useEffect, useState } from "react";
import { api } from "../api/api";
import Card from 'react-bootstrap/Card';
import CardProduto from "./CardProduto";

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
        subTotal = produto.preco * quantidade;
        return subTotal;
    }

    return (
        <div style={{ margin: '50px' }}>
            <Card style={{ width: '30rem' ,height :'auto' , marginLeft: '500px', borderWidth: '3px', borderColor: '#18569cb8', borderStyle: 'solid'  }}>
                
                <Card.Body className="d-flex flex-row justify-content-between">
                    <div style={{margin: '30px'}}>
                        <Card.Img variant="top" src={produto.imgurl} style={{ width: '100%', objectFit: 'contain' }} />
                    </div>
                    <div >
                        <Card.Title>{produto.nome}</Card.Title>
                        <Card.Text>Valor Unitário: R${produto.preco}</Card.Text>
                        <Card.Text>Quantidade: {quantidade}</Card.Text>
                        <Card.Text>Total da Compra: R${calcularSubTotal()}</Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardItem;
