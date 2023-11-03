import { Context } from "../context/Context"
import { useContext, useEffect, useState } from "react"
import NavBar from "../components/Navbar"
import CardCarrinho from "../components/CardCarrinho"

const Carrinho = () =>{
    const {carrinho, setCarrinho, usuario, setUsuario} = useContext(Context)
    const [pedido, setPedido] = useState({})
    
    var totalPedido = 0

    const handleEsvaziarCarrinho = () => {
        setCarrinho([])
    }

    const calcularPedido = () => {
        carrinho.map(({preco, quantidade})=> {
            return (
                totalPedido += (preco*quantidade) 
            )
        })
    }

    const handleSalvarPedido = () => {
        setPedido({
            "valorTotal": valorTotal,
            "idUser": usuario.id,
            "itens": [carrinho.map(({id, quantidade})=>{
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
            <br />
            <button onClick={handleEsvaziarCarrinho}>Esvaziar o carrinho</button>
            <button onClick={handleSalvarPedido}>COMPRAR</button>
        </>
    )
}

export default Carrinho