import { Link } from "react-router-dom";
import { api } from "../api/api"
import { Context } from "../context/Context"
import { useContext, useEffect, useState } from "react"

const CardProdutoEspecifico = ({ nome, preco, imgurl,id,descricao,favoritos,estoque,getProdutos }) => {
    const {carrinho, setCarrinho, usuarios, setUsuarios} = useContext(Context)
    const [quantidade, setQuantidade] = useState()

    const handleLike = () => {
        api.patch(`/produtos/${id}`, { favoritos: favoritos + 1 })
        getProdutos()
    }   

    const handleQuantidade = () => {
        if(quantidade < estoque){
        api.patch(),{estoque: estoque + 1}
        }else{
            estoque = 1
        }
    }
    
    return (
        <Link to= {`/produtos/${id}`} >
            
   
    
      <div style={{ display: 'flex', alignItems: 'center', border: '6px solid', borderRadius: '30px', marginTop: '10px', position: 'absolute', padding: '20px', top: '50%',
    left: '50%', transform: 'translate(-50%, -50%)' }}>
        <img src={imgurl} alt={'imagem'} style={{ maxWidth: '100%' }} />
        <div style={{padding : '30px'}}>
          <h1>{nome}</h1>
          <button onClick={handleLike} >Gostei: {favoritos}</button>
          <h3>Preço: R$ {preco}</h3>
          <p>{descricao}</p>
          <h4>Disponíveis {estoque} Unidades</h4>
          <div>
            <button onClick={handleQuantidade}>-</button>
            <p>Quantidade de unidades: {quantidade}</p>
          </div>
          
          <br />
          <br />
          <button>Adicionar ao Carrinho</button>
        </div>
      </div>

 

        </Link>
    )

    }
export default CardProdutoEspecifico