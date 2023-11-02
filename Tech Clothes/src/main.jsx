import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Produtos from './pages/Produtos.jsx';
import Login from './pages/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/login", //login
    element: <Login />
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
    element: <div>Carrinho</div>
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
