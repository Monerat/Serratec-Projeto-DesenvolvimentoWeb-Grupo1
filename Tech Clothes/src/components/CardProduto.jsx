const CardProduto = ({ nome, quantidade, imgurl,id }) => {
    
    return (
        <div>
            <img src={imgurl} />
            <p> id = {id} nome = {nome} quantidade em estoque {quantidade}</p>
        </div>
    )
}

export default CardProduto