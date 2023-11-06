import { useEffect, useState } from "react"
import CardProduto from "../components/CardProduto"
import { api } from "../api/api"
import NavBar from "../components/Navbar"

const Produtos = () => {
  const [produtos, setProdutos] = useState([])
  const [pesquisa, setPesquisa] = useState('')

  const getProdutos = async () => {
    const response = await api.get('/produtos')
    const produtosFiltrados = response.data.filter((produto) => produto.estoque !== 0) //Filtra os produtos com estoque zerado
    setProdutos(produtosFiltrados)
  }

  useEffect(() => {
    if (pesquisa === '') {
      getProdutos()
    }
  }, [pesquisa])

  const handlePesquisar = (e) => {
    e.preventDefault()
    setProdutos(produtos.filter((produto) => produto.nome === pesquisa || produto.categoria === pesquisa))
  }
  const handleVarPesq = (event) => {
    setPesquisa(event.target.value)
  }

  return (
    <>
      <NavBar />

      <form onSubmit={handlePesquisar} style={{ textAlign: 'right', backgroundColor: 'blue', padding: '10px' }}>
        <input
          value={pesquisa}
          onChange={handleVarPesq}
          style={{
            padding: '5px',
            borderRadius: '5px',
            border: 'none',
            marginRight: '5px',
            width: '150px', // Defina a largura do campo de pesquisa conforme necessário
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: 'white',
            color: 'blue',
            padding: '5px 10px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Pesquisar
        </button>
      </form>

      {produtos.map(
        ({ nome, preco, id, imgurl }) => (
          <CardProduto
            key={id}
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