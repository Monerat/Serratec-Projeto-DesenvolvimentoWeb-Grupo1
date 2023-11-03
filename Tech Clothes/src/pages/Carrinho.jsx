import { Context } from "../context/Context"
import { useContext, useEffect, useState } from "react"

import NavBar from "../components/Navbar"
import CardCarrinho from "../components/CardCarrinho"

const Carrinho = () =>{
    const {carrinho, setCarrinho, usuarios, setUsuarios} = useContext(Context)
    
    const handleEsvaziarCarrinho = () => {
        setCarrinho('')
    }

    const handleSalvarPedido = () => {
        
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