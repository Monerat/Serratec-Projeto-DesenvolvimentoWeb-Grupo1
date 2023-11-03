
import NavBar from "../components/Navbar"
import { useState } from "react"
import { api } from "../api/api"





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
      <div>
        <form onSubmit={handlePesquisarUsuario} >
          <label>Email: </label> 
          <input onChange={handlechangeEmail}/>
          <br />
          <label>Senha: </label>
          <input onChange={handlechangeSenha}/>
          <br />

          <button type="Submit" >Logar</button>

        </form>  
      </div>    
    </>
  )
}

export default Login;
