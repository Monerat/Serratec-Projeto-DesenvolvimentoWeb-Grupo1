import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


const CardProduto = ({ nome, preco, imgurl,id }) => {
    
    return (
        <Link to= {`/produtos/${id}`} >
             <div className="d-inline-block m-4">
      <Link to={`/produtos/${id}`}>
        <Card style={{ width: '16rem' }} >
          <Card.Img variant="top" src={imgurl} />
          <Card.Body style={{ backgroundColor: 'silver' }}>
            <Card.Title>{nome}</Card.Title>
            <Card.Text style={{ color: 'black' }}>{preco}</Card.Text>
            <Button variant="primary">Inspecionar</Button>
          </Card.Body>
        </Card>  
      </Link>
    </div>
        </Link>
    )
}

export default CardProduto