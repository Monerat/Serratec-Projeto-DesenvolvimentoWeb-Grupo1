import CardItem from "./CardItem"

const CardPedido = ({id, valorTotal, idUser, itens}) => {
    return(
        <div>
            <p>{id}</p>
            <p>{valorTotal}</p>
            <p>{idUser}</p>
            {itens.map(
            ({ idProduto, quantidade}) => (
                <CardItem
                    idProduto={idProduto}
                    quantidade = {quantidade}
                />
            )
        )}
        </div>
    )
}

export default CardPedido