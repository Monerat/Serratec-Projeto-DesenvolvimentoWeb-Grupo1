import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Ratio } from 'react-bootstrap';


const CardProduto = ({ nome, preco, imgurl, id }) => {
  return (
    <div className="d-inline-block m-4">
      <Link style={{ textDecoration: 'none' }} to={`/produtos/${id}`}>
        <Card style={{ width: '30rem', heigh: 'auto', borderWidth: '3px', borderColor: '#18569cb8', borderStyle: 'solid' }}>
          <Ratio aspectRatio="1x1">
            <Card.Img style={{objectFit: 'contain'}} variant="top" src={imgurl} />
          </Ratio>
          <Card.Body style={{ backgroundColor: 'silver' }}>
            <Card.Title style={{ color: 'black' , fontSize: '30px' }}>{nome}</Card.Title>
            <Card.Text style={{ color: 'black' , fontSize: '30px' }}>R${preco}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default CardProduto;
