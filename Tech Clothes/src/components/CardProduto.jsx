import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Ratio } from 'react-bootstrap';

const CardProduto = ({ nome, preco, imgurl, id }) => {
  return (
    <div className="d-inline-block m-4">
      <Link to={`/produtos/${id}`}>
        <Card style={{ width: '250px', height: 'auto' }}>
          <Ratio aspectRatio="1x1">
            <Card.Img variant="top" src={imgurl} />
          </Ratio>
          <Card.Body style={{ backgroundColor: 'silver' }}>
            <Card.Title>{nome}</Card.Title>
            <Card.Text style={{ color: 'black' }}>{preco}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default CardProduto;
