import NavBar from "../components/Navbar"
import { api } from "../api/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cadastrar = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate();

    const setUser = async () => {
        try {
            let newUser =
            {
                nome: nome,
                email: email,
                senha: senha
            }

            const response = await api.post('/users', newUser);
            console.log("Usuario salvo no ID: " + response.data.id);
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleNome = (event) => {
        setNome(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleSenha = (event) => {
        setSenha(event.target.value);
    };

    const handleCadastrar = () => {
        setUser()
        handleLimparForm()
        navigate("/")
    }

    const handleLimparForm = () => {
        setNome("")
        setEmail("")
        setSenha("")
    }

    return (
        <>
            <NavBar />
            <div style={{
                backgroundImage: 'url("https://www.adventureclub.com.br/wp-content/uploads/2020/11/Background-apresentacao-18-min.png")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '80vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Form style={{backgroundColor: '#03053db0', borderRadius: "8px"}} onSubmit={handleCadastrar} onReset={handleLimparForm} >
                        <Form.Group className="mb-3" controlId="formBasicNome" style={{ margin: '10px' }}>
                            <Form.Label style={{ color: 'white' }}>Nome</Form.Label>
                            <Form.Control onChange={handleNome} value={nome} type="text" style={{ color: 'white' }} placeholder="Informe seu Nome" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail" style={{ margin: '10px' }}>
                            <Form.Label style={{ color: 'white' }}>E-mail</Form.Label>
                            <Form.Control onChange={handleEmail} value={email} type="email" placeholder="Informe seu Email" />
                            <Form.Text style={{ color: 'white' }}>
                                Sua senha não será compartilhada com ninguém
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword" style={{ margin: '10px' }}>
                            <Form.Label style={{ color: 'white' }}>Senha</Form.Label>
                            <Form.Control onChange={handleSenha} value={senha} type="password" placeholder="Informe sua Senha" />
                        </Form.Group>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Button variant="danger" type="reset" style={{ margin: '10px' }}>
                            Limpar
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

export default Cadastrar