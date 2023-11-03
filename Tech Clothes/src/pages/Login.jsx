
import NavBar from "../components/Navbar"
import { useState, useEffect } from "react"
import { api } from "../api/api"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [usuario, setUsuario] = useState([])
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const getUser = async () => {
    setIsLoading(true);
    const response = await api.get("/users", {
      params: {
        "email": email,
        "senha": senha
      }
    });
    setUsuario(response.data);
    setIsLoading(false);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSenha = (event) => {
    setSenha(event.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await getUser();
    handleAuth();
  };

  const handleAuth = () => {
    if(!isLoading){
      if (usuario[0] === undefined) {
        alert("usuario ou senha inválidos");
      } else {
        navigate("/produtos");
      }
    }
    else handleAuth()
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <label>email
          <br />
          <input type="text" onChange={handleEmail} />
        </label>
        <br />
        <label>senha
          <br />
          <input type="text" onChange={handleSenha} />
        </label>
        <br />
        <button type="submit">Logar</button>
      </form>
    </>
  )
}

export default Login;

