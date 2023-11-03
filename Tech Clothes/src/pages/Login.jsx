
import NavBar from "../components/Navbar"
import { useState } from "react"
import { api } from "../api/api"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';





const Login = () => {

  const [email, setEmail] = useState ('')
  const [senha, setSenha] = useState ('')
  const [listaUsuarios, setListaUsuarios] = useState([])

  const handlechangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlechangeSenha = (e) => {
    setSenha(e.target.value)
  }

  const handleListaUsuarios = (e) => {    //vou aproveitar esse método para cadastro.
    e.preventDefault ()
    setListaUsuarios([...listaUsuarios, {email,senha}])
    alert('Usuário logado!')
  }


  

  const handlePesquisarUsuario = (e) =>{
    e.preventDefault()
    setListaUsuarios(listaUsuarios.filter((Login) => {listaUsuarios.email === Login.email && listaUsuarios.senha === Login.senha
    return alert('Login efetuado com sucesso!')  
  }))
     alert ('Dados inválidos!') 
    
}

  


  return (
    
    <>
     <NavBar/>  
     <div style={{
  backgroundImage: 'url("https://images.alphacoders.com/103/103593.jpg")',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '80vh', 
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}}>
  <Form onSubmit={handlePesquisarUsuario}>
    <Form.Group className="mb-3" controlId="formBasicEmail" style={{ margin: '10px' }}>
      <Form.Label>Email</Form.Label>
      <Form.Control onChange={handlechangeEmail} type="email" placeholder="Informe seu Email" />
      <Form.Text className="text-muted">
        Sua senha não será compartilhada com ninguém
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword" style={{ margin: '10px' }}>
      <Form.Label>Senha</Form.Label>
      <Form.Control onChange={handlechangeSenha} type="password" placeholder="Informe sua Senha" />
    </Form.Group>

    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
      <Button variant="primary" type="submit" style={{ margin: '10px' }}>
        Logar
      </Button>
      <Button variant="primary" type="submit" style={{ margin: '10px' }}>
        Cadastrar
      </Button>
    </div>
  </Form>
</div>

   
    </>
  )
}

export default Login;

