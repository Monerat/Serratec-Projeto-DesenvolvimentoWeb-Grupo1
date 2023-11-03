import { Context } from "../context/Context"
import { useContext, useEffect, useState } from "react"

import NavBar from "../components/Navbar"
import CardCarrinho from "../components/CardCarrinho"

const Carrinho = () =>{
    const {carrinho, setCarrinho, usuarios, setUsuarios} = useContext(Context)
   
    return (
        <>
            <NavBar />
            {carrinho.map(
                ({  nome, quantidade, imgurl, preco }) => (
                    <CardCarrinho
                        nome={nome}
                        quantidade={quantidade}
                        preco={preco}
                        imgurl={imgurl}
                    />
                )
            )}
        </>
    )
}

export default Carrinho