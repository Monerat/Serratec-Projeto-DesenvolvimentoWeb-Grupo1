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
            
            </div>
    )
}

export default CardPedido