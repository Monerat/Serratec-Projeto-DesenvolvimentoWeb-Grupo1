import CardItem from "./CardItem"
import Card from 'react-bootstrap/Card';

const CardPedido = ({ id, valorTotal, idUser, itens }) => {
    return (
        <div style={{ margin: '50px' }}>
            <Card style={{ width: '90rem', height: 'auto', marginLeft: '100px', borderWidth: '3px', borderColor: '#0874ef', borderStyle: 'solid' }}>
                <div className="d-flex flex-row justify-content-between" style={{ width: '90rem', height: '6rem', paddingTop: "25px", paddingLeft: "40px", paddingRight: "40px", backgroundColor: '#0874ef' }}>
                    <h3 style={{ color: 'white', textDecoration: 'none', fontSize: '35px', marginRight: '50px', fontWeight: 'bold' }}>Numero do Pedido: #{id}</h3>
                    <h3 style={{ color: 'white', textDecoration: 'none', fontSize: '35px', marginRight: '50px', fontWeight: 'bold' }}>Total do pedido: R$ {valorTotal}</h3>
                </div>
                <Card.Body style={{ height: 'auto' }} className="d-flex flex-row justify-content-center">
                    {itens.map(
                        ({ idProduto, quantidade }) => (
                            <CardItem
                                idProduto={idProduto}
                                quantidade={quantidade}
                            />
                        )
                    )}
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardPedido