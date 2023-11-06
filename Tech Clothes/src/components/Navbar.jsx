import { Link } from "react-router-dom";
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  const navStyle = {
    background: 'linear-gradient(to left, #141e30, #243b55)',
    variant: 'dark',
  };

  return (
    <Navbar style={navStyle}>
      <Container className="d-flex justify-content-between align-items-center">
        <Link to="/produtos" style={{ textDecoration: 'none' }}>
          <img src="https://i.ibb.co/ZG1Nm6f/00055.png" alt="Tech Clothes" style={{ width: '200px' }} />
        </Link>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '35px', marginRight: '50px', fontWeight: 'bold' }}>
          Login
        </Link>
        <Link to="/produtos" style={{ color: 'white', textDecoration: 'none', fontSize: '35px', marginRight: '50px', fontWeight: 'bold' }}>
          Produtos
        </Link>
        <Link to="/pedidos" style={{ color: 'white', textDecoration: 'none', fontSize: '35px', marginRight: '1px', fontWeight: 'bold' }}>
          Histórico de Pedidos
        </Link>
        <Link to="/carrinho" style={{ textDecoration: 'none' }}>
          <img src="https://cdn.discordapp.com/attachments/1135258526965583942/1171162805316091914/image.png?ex=655bad5b&is=6549385b&hm=bf0d9a413459f4d8d1fa6724bd26cbbc844409eb0c031e10946369f3d6f531c6&" alt="carrinho" style={{ width: '100px' }} />
        </Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;
