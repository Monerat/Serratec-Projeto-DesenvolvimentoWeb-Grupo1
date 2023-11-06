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
import Carrinho from './pages/Carrinho.jsx';
import ProdutoEspecifico from './pages/ProdutoEspecifico.jsx'
import Pedidos from './pages/Pedidos.jsx';
import { Provider } from './context/Context.jsx';
import Cadastrar from './pages/Cadastrar.jsx';

const router = createBrowserRouter([
  {
    path: "/", //login
    element: <Login />
  },
  {
    path: "/produtos", //listar Produtos
    element: <Produtos />
  },
  {
    path: "/produtos/:id", //listar Produto especifico
    element: <ProdutoEspecifico />
  },
  {
    path: "/carrinho", //Carrinho de compras
    element: <Carrinho />
  },
  {
    path: "/pedidos", //Historico de Pedidos
    element: <Pedidos />
  },
  {
    path: "/cadastrar", //Historico de Pedidos
    element: <Cadastrar />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
