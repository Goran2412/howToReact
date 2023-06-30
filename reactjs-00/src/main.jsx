import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import vehicles from './data/vehicles.js';
import VehicleView from './views/VehicleView';

const routes = [
  {
    path: '/',
    element: <App />
  },
]

vehicles.forEach((v) => {
  routes.push({
    path: v.name,
    element: <VehicleView vehicle={v}/>
  });
});

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render( // crear la ruta root y que renderice lo de adentrofite
  <React.StrictMode> 
    <RouterProvider router={router} />
  </React.StrictMode>,
) 
// el strictmode hace que muestre los errores que hay
// app es la etiqueta que hace referencia al objeto App que importamos en la línea 3