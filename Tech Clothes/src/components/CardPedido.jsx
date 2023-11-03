import { useState } from "react";
import { Link } from "react-router-dom";


const CardPedido = ({ idUser, valorTotal,itens }) => {
    
    return (
        <Link to= {`/pedidos/${id}`} >
            <div>
                <h3>{idUser}</h3>               
                <h3>{valorTotal}</h3>
                <h3>{itens[
                {
                "idProduto": 1,
                "quantidade": 10
                }
                ]}
                </h3>
            </div>
        </Link>
    )
}

export default CardPedido