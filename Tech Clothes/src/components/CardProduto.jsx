import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Ratio } from 'react-bootstrap';


const CardProduto = ({ nome, preco, imgurl, id }) => {
  return (
    <div className="d-inline-block m-4">
      <Link style={{ textDecoration: 'none' }} to={`/produtos/${id}`}>
        <Card style={{ width: '20rem', heigh: 'auto', borderWidth: '3px', borderColor: '#18569cb8', borderStyle: 'solid' }}>
          <Ratio aspectRatio="1x1">
            <Card.Img style={{ objectFit: 'contain' }} variant="top" src={imgurl} />
          </Ratio>
          <Card.Body>
            <Card.Title style={{ color: 'black', fontSize: '25px' }}>{nome}</Card.Title>
            <Card.Text style={{ color: 'black', fontSize: '30px' }}>R${preco}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default CardProduto;
