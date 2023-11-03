import { createContext, useState } from "react";

export const Context = createContext({})

export const Provider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([])
    const [usuario, setUsuario] = useState({})

    return (
        <Context.Provider value={{carrinho, setCarrinho, usuario, setUsuario}}>{ children }</Context.Provider>
    )
}