import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Produtos from './pages/Produtos.jsx';
import Carrinho from './pages/Carrinho.jsx';

const router = createBrowserRouter([
  {
    path: "/", //login
    element: <div>Login</div>,
  },
  {
    path: "/produtos", //listar Produtos
    element: <Produtos />
  },
  {
    path: "/produtos/:id", //listar Produto especifico
    element: <div>produto especifico</div>
  },
  {
    path: "/carrinho", //Carrinho de compras
    element: <Carrinho />
  },
  {
    path: "/pedidos", //Historico de Pedidos
    element: <div>Historico de Pedidos</div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
