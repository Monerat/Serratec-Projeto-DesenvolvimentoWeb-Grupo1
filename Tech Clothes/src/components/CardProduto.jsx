import { Link } from "react-router-dom";

const CardProduto = ({ nome, preco, imgurl,id }) => {
    
    return (
        <Link to= {`/produtos/${id}`} >
            <div>
                <img src={imgurl} />
                <h3>{nome}</h3>
                <h3>R$ {preco}</h3>
            </div>
        </Link>
    )
}

export default CardProduto