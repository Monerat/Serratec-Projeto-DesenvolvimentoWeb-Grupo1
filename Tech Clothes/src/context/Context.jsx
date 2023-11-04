import { createContext, useState } from "react";

export const Context = createContext({})

export const Provider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([])
    const [usuario, setUsuario] = useState({})
    const [usuarioLogado, setUsuarioLogado] = useState(false)

    return (
        <Context.Provider value={{carrinho, setCarrinho, usuario, setUsuario, usuarioLogado, setUsuarioLogado}}>{ children }</Context.Provider>
    )
}