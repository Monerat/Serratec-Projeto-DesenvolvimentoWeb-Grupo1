import { Context } from "../context/Context"
import { useContext, useEffect, useState } from "react"
import NavBar from "../components/Navbar"
import CardCarrinho from "../components/CardCarrinho"
import { api } from "../api/api"

const Carrinho = () => {
    const { carrinho, setCarrinho, usuario, setUsuario } = useContext(Context)
    const [totalPedido, setTotalPedido] = useState(0.0)

    const setSalvarPedido = async () => {
        
        try {
            let pedido = 
            {
                valorTotal: totalPedido,
                idUser: usuario[0].id,
                itens: carrinho.map(({ id, quantidade }) => {
                    return{
                            idProduto: id,
                            quantidade: quantidade
                    }
    
                })
            }
            console.log(pedido)
            console.log(carrinho)
            const response = await api.post('/pedidos', pedido)

            console.log("pedido salvo no id: " + response.data.id)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        setTotalPedido(calcularPedido())
    }, [carrinho])

    const handleEsvaziarCarrinho = () => {
        setCarrinho([])
        setTotalPedido(calcularPedido())
    }

    const calcularPedido = () => {
        return carrinho.reduce((total, item) => {
            return total + (item.preco * item.quantidade)
        }, 0)
    }

    const handleSalvarPedido = () => {
        setSalvarPedido()
        //setEstoqueNovo() utilizar .patch
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