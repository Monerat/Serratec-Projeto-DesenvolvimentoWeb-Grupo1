import { useEffect, useState } from "react"
import CardProduto from "../components/CardProduto"
import { api } from "../api/api"
import NavBar from "../components/Navbar"

const Produtos = () => {
    const [produtos, setProdutos] = useState([])
    const [pesquisa, setPesquisa] = useState('')

    const getProdutos = async () => {
        const response = await api.get('/produtos')
        const produtosFiltrados = response.data.filter((produto) => produto.quantidade !== 0) //Filtra os produtos com estoque zerado
        setProdutos(produtosFiltrados)
    }
    
    useEffect(() => {
        if(pesquisa===''){
            getProdutos()
        }
    }, [pesquisa])

    const handlePesquisar = (e) =>{
        e.preventDefault()
        setProdutos(produtos.filter((produto) => produto.nome === pesquisa))
    }
    const handleVarPesq = (event) =>{
        setPesquisa(event.target.value)
    }

    return (
        <>
        <NavBar />
        <br />
        <form onSubmit={handlePesquisar}>
            <input value={pesquisa} onChange={handleVarPesq}/>
            <button type="submit">Pesquisar</button>
        </form>

        {produtos.map(
            ({  nome, preco, id, imgurl}) => (
                <CardProduto
                    nome={nome}
                    preco={preco}
                    id={id}
                    getProdutos={getProdutos}
                    imgurl={imgurl}
                />
            )
        )}
        </>
    )
}

export default Produtos