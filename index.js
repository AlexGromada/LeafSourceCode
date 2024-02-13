import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import FoodMenu from './pages/MenuPage';
import ProductInfo from './pages/ProductInfo'

const router = createBrowserRouter([
  {
    path: "/Leaf",
    element: <App/>
  },
  {
    path: "/Leaf/menu",
    element: <FoodMenu/>
  },
  {
    path: "/Leaf/menu/product/:productId",
    element: <ProductInfo/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
