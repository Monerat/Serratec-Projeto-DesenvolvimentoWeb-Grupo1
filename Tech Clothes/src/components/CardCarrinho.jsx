const CardCarrinho = ({ imgurl, nome, quantidade, preco }) => {
    return (
        <div>
            <img src={imgurl} />
            <p>{nome}</p>
            <p>Quantidade: {quantidade}</p>
            <p>Preço unitario = R$ {preco}</p>
        </div>
    )
}

export default CardCarrinho