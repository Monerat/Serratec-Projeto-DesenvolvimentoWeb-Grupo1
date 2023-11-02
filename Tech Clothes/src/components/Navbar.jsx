import { Link } from "react-router-dom";

const NavBar = () => {
 
  return (
    <header>
      <div >
        <Link to='/produtos'>Produtos</Link>
        <Link to='/carrinho'><img src="https://i.imgur.com/HpqDXbm.png" alt="carrinho"style={{ width:'60px' }} /></Link>
      </div>

    </header>
  );
}
export default NavBar;