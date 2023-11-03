import { Link } from "react-router-dom";
import { api } from "../api/api"
import { Context } from "../context/Context"
import { useContext, useEffect, useState } from "react"

const CardProdutoEspecifico = ({ nome, preco, imgurl,id,descricao,favoritos,estoque,getProdutos }) => {
    const {carrinho, setCarrinho, usuarios, setUsuarios} = useContext(Context)
    const [quantidade, setQuantidade] = useState(1)

    

  const handleAddCarrinho = () => {
    const produto={nome,preco,imgurl,quantidade};
       
    setCarrinho([ ... carrinho, produto])
    
  }


    const handleLike = () => {
        api.patch(`/produtos/${id}`, { favoritos: favoritos + 1 })
        getProdutos()
    }   

    const handleQuantidadeAumentar = () => {
        if(quantidade < estoque){
       setQuantidade(quantidade + 1)
        console.log(quantidade);
        }else{
            setQuantidade(1)
        }
    }

    const handleQuantidadeDiminuir = () =>{
      if(quantidade != 1){
      setQuantidade(quantidade - 1)
      }else{
        setQuantidade(estoque)
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
          <br/>
          <div>
            <button onClick={handleQuantidadeDiminuir}>-</button>  {quantidade}  <button onClick={handleQuantidadeAumentar}>+</button>
          </div>
          
          <br />
          <br />
          <button onClick={handleAddCarrinho}>Adicionar ao Carrinho</button>
        </div>
      </div>

 

        </Link>
    )

    }
export default CardProdutoEspecifico