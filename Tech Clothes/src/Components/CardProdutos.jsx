import React from 'react';
import { Container, Row, Col, Card, Button, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardNavbar from './CardNavbar';


const CardProdutos = () => {
 
    return (
      <div style={{backgroundColor:'grey'}} >
          <CardNavbar />
        <Row xs={1} md={6} className="g-2">
          {Array.from({ length: 12 }).map((_, idx) => (
              <Col key={idx}>
              <Card style={{width:"290px"}} >
                <Card.Img  variant="top" src="https://dipollini.vtexassets.com/arquivos/ids/165888/Sapato_Social_Maggiore_dipollini_Couro_Verniz_Preto_MSV-26306.jpg?v=636199041102370000" />
                <Card.Body style={{backgroundColor:'Silver'}}>
                  <Card.Title>Nome</Card.Title>
                  <Card.Title>Preco</Card.Title>
                  <Button variant="primary">Inspecionar</Button>{' '}          
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      );
    }
    
export default CardProdutos;
