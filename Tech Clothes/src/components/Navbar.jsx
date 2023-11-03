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
          <img src="https://as1.ftcdn.net/v2/jpg/02/14/45/30/1000_F_214453061_qMpms4YnswzZgb1VuGn4voobIaQVbhuI.jpg" alt="Tech Clothes" style={{ width: '200px' }} />
        </Link>
        <Link to="/carrinho" style={{ textDecoration: 'none' }}>
          <img src="https://i.imgur.com/HpqDXbm.png" alt="carrinho" style={{ width: '100px' }} />
        </Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;

