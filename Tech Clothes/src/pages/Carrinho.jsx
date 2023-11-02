import { CarrinhoContext } from "../context/CarrinhoContext"
import { useContext, useEffect, useState } from "react"
import { api } from "../api/api"

const Carrinho = () =>{
    [pedidos, setPedidos] = useState([])
    // const {carrinho, setCarrinho} = useContext(CarrinhoContext)

    // const handleAddCarrinho = (e) =>{
    //     e.preventDefault()
    //     setCarrinho([...carrinho, {
    //         "id": 1,
    //         "nome": "Mouse com fio Logitech",
    //         "preco": 29.99,
    //         "quantidade": 37,
    //         "imgurl": "https://m.media-amazon.com/images/I/617w9nbQooL.__AC_SX300_SY300_QL70_ML2_.jpg"
    //     }])
    // }
    
    // handleAddCarrinho()
    // const getPedidos = async () => {
    //     const response = await api.get('/pedidos')
    //     console.log(response.data)
    //     setPedidos(response.data)
    // }

    // useEffect(() => {
    //     getPedidos()
    // }, [])

    return (
        <>
        {/* {carrinho.map(
            ({  nome, quantidade, imgurl}) => (
                <Item
                    nome={nome}
                    quantidade={quantidade}
                    imgurl={imgurl}
                />
            )
        )} */}
        </>
    )
}

export default Carrinho