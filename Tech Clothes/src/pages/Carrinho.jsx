import { Context } from "../context/Context";
import { useContext, useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { api } from "../api/api";
import { useNavigate } from "react-router-dom";

const Carrinho = () => {
    const { carrinho, setCarrinho, usuario, usuarioLogado } = useContext(Context)
    const [totalPedido, setTotalPedido] = useState(0.0)
    const navigate = useNavigate();

    const setSalvarPedido = async () => {

        try {
            let pedido =
            {
                valorTotal: totalPedido.toFixed(2),
                idUser: usuario[0].id,
                itens: carrinho.map(({ id, quantidade }) => {
                    return {
                        idProduto: id,
                        quantidade: quantidade
                    }

                })
            }

            const response = await api.post('/pedidos', pedido);
            console.log("Pedido salvo no ID: " + response.data.id);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        setTotalPedido(calcularPedido());
    }, [carrinho]);

    const handleEsvaziarCarrinho = () => {
        setCarrinho([]);
        setTotalPedido(calcularPedido());
    }

    const calcularPedido = () => {
        return carrinho.reduce((total, item) => {
            return total + (item.preco * item.quantidade);
        }, 0);
    }

    const handleSalvarPedido = () => {
        if (carrinho != "") {
            if (usuarioLogado) {
                setSalvarPedido()
                setNewEstoque()
                handleEsvaziarCarrinho()
                navigate("/pedidos")
            } else {
                alert("Logue no site, antes de efetuar a compra.")
            }
        } else {
            alert("Adicione itens ao carrinho primeiro.")
        }
    }

    const setNewEstoque = () => {
        carrinho.map(({ id, quantidade, estoque }) => {
            return (
                atualizarEstoque(id, quantidade, estoque)
            )
        })
    }

    const atualizarEstoque = async (ID, qtd, estoque) => {
        const response = await api.patch(`/produtos/${ID}`, { estoque: estoque - qtd })
    }

    return (
        <>
            <NavBar />
            <div className="container" >
                <h2>Itens no Carrinho</h2>
                <div style={{ marginBottom: '30px', marginTop: '20px' }} className="row">
                    {carrinho.map(({ id, nome, quantidade, imgurl, preco }) => (
                        <div className="col-md-4" key={id}>
                            <Card className="my-3" style={{ width: '20rem', height: '100%', borderWidth: '3px', borderColor: '#18569cb8', borderStyle: 'solid' }} >
                                <Card.Img variant="top" src={imgurl} style={{ objectFit: 'contain', maxHeight: '250px' }} />
                                <Card.Body>
                                    <Card.Title>{nome}</Card.Title>
                                    <Card.Text>Quantidade: {quantidade}</Card.Text>
                                    <Card.Text>Preço Unitário: R$ {preco}</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
                <div className="text-center my-4">
                    <h4>Total do pedido: R$ {totalPedido.toFixed(2)}</h4>
                </div>
                <div className="text-center">
                    <Button variant="danger" onClick={handleEsvaziarCarrinho} className="m-2">Esvaziar Carrinho</Button>{' '}
                    <Button variant="success" onClick={handleSalvarPedido} className="m-2">Finalizar Compra</Button>
                </div>
            </div>
        </>
    )
}

export default Carrinho;