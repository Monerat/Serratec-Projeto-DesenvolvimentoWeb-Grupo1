import { Link } from "react-router-dom";
import { api } from "../api/api"
import { Context } from "../context/Context"
import { useContext, useEffect, useState } from "react"

const CardProdutoEspecifico = ({ nome, preco, imgurl,id,descricao,favoritos,estoque,getProdutos }) => {
    const {carrinho, setCarrinho, usuarios, setUsuarios} = useContext(Context)
    const [quantidade, setQuantidade] = useState()

    const [quantidadex, setQuantidadex] = useState(10);

  const handleAddCarrinho = () => {
    const produto={nome,preco,imgurl,quantidadex};
       
    setCarrinho([ ... carrinho, produto])
    
  }


    const handleLike = () => {
        api.patch(`/produtos/${id}`, { favoritos: favoritos + 1 })
        getProdutos()
    }   

    const handleQuantidadeAumentar = () => {
        if(quantidadex < estoque){
       setQuantidadex(quantidadex + 1)
        console.log(quantidadex);
        }else{
            setQuantidadex(1)
        }
    }

    const handleQuantidadeDiminuir = () =>{
      if(quantidadex != 1){
      setQuantidadex(quantidadex - 1)
      }else{
        setQuantidadex(estoque)
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
            <button onClick={handleQuantidadeDiminuir}>-</button>  {quantidadex}  <button onClick={handleQuantidadeAumentar}>+</button>
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