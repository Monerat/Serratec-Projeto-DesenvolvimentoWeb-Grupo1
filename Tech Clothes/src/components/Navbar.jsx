import { Link } from "react-router-dom";
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
 
  return (
    <Navbar bg="primary" variant="dark">
      <Container className="d-flex justify-content-between align-items-center">
        <Link to="/produtos" style={{ color: 'white', textDecoration: 'none', fontSize: '35px', marginRight: '1px', fontWeight: 'bold' }}>
          TECH CLOTHES SHARK
        </Link>
        <Link to="/pedidos" style={{ color: 'white', textDecoration: 'none', fontSize: '35px', marginRight: '1px', fontWeight: 'bold' }}>
          Historico de pedidos
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img src="https://i.ibb.co/ZG1Nm6f/00055.png" alt="Tech Clothes" style={{ width: '200px' }} />
        </Link>
        <Link to="/carrinho" style={{ textDecoration: 'none' }}>
          <img src="https://www.svgrepo.com/show/477419/shopping-cart-14.svg" alt="carrinho" style={{ width: '100px' }} />
        </Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;

