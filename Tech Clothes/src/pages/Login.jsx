
import NavBar from "../components/Navbar"
import { useState, useEffect, useContext } from "react"
import { api } from "../api/api"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context"

const Login = () => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const navigate = useNavigate();

  const { usuario, setUsuario } = useContext(Context)

  const getUser = async () => {
    const response = await api.get("/users");
    setUsuario(response.data);
  }

  useEffect(() => {
    getUser()
  }, [])

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSenha = (event) => {
    setSenha(event.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault()
    setUsuario(usuario.filter((user) => user.email == email && user.senha == senha))
    handleAuth()
  };

  const handleAuth = () => {
    if (usuario[0] === undefined) {
      alert("usuario ou senha inválidos");
    } else {
      navigate("/produtos")
    }
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

