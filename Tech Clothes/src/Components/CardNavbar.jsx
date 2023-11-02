import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const NavBar = () => {
 
  return (
    <Navbar expand="lg" bg="primary" variant="dark">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#" style={{ fontWeight: 'bold' }}>
          Tech Clothes
        </Navbar.Brand>
        <Form className="d-flex mx-auto">
          <Form.Control
            type="search"
            placeholder="Pesquisar"
            aria-label="Pesquisar"
          />
          <Button variant="outline-light">Pesquisar</Button>
        </Form>
        <Button><img src="https://i.imgur.com/HpqDXbm.png" alt="carrinho"style={{ width:'60px' }} /></Button>
      </Container>
    </Navbar>
  );
}
export default NavBar;