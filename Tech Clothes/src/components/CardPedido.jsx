import CardItem from "./CardItem"

const CardPedido = ({id, valorTotal, idUser, itens}) => {
    return(
        <div>
           
            {itens.map(
            ({ idProduto, quantidade}) => (
                <CardItem
                    idProduto={idProduto}
                    quantidade = {quantidade}
                />
            )
        )}
            <p>{id}</p>
                <p>{valorTotal}</p>
                <p>{idUser}</p>
            </div>
    )
}

export default CardPedido