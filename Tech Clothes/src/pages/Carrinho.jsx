import { Context } from "../context/Context"
import { useContext, useEffect, useState } from "react"
import NavBar from "../components/Navbar"
import CardCarrinho from "../components/CardCarrinho"

const Carrinho = () => {
    const { carrinho, setCarrinho, usuario, setUsuario } = useContext(Context)
    const [pedido, setPedido] = useState({})
    const [totalPedido, setTotalPedido] = useState(0.0)

    useEffect(() => {
        setTotalPedido(calcularPedido())
    }, [carrinho])

    const handleEsvaziarCarrinho = () => {
        setCarrinho([])
        setTotalPedido(calcularPedido())
    }

    const calcularPedido = () => {
        return carrinho.reduce((total, item) => {
            return total + (item.preco * item.quantidade);
        }, 0);
    };

    const handleSalvarPedido = () => {
        setPedido({
            "valorTotal": valorTotal,
            "idUser": usuario.id,
            "itens": [carrinho.map(({ id, quantidade }) => {
                return (
                    {
                        "idProduto": id,
                        "quantidade": quantidade
                    }
                )
            })
            ]
        })
    }


    return (
        <>
            <NavBar />
            {carrinho.map(
                ({ nome, quantidade, imgurl, preco }) => (
                    <CardCarrinho
                        nome={nome}
                        quantidade={quantidade}
                        preco={preco}
                        imgurl={imgurl}
                    />
                )
            )}
            <h4>Total do pedido</h4>
            <p>R$ {totalPedido}</p>
            <br />
            <button onClick={handleEsvaziarCarrinho}>Esvaziar o carrinho</button>
            <button onClick={handleSalvarPedido}>COMPRAR</button>
        </>
    )
}

export default Carrinho