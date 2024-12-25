import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AuthProvider from './Auth Provider/AuthProvider';
import Root from './Main Root/Root';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import AddFoods from './Pages/AddFoods';
import Gellery from './Pages/Gellery';
import AllFoods from './Pages/AllFoods';
import SingleFood from './Pages/SingleFood';
import FoodPurchase from './Pages/FoodPurchase';
import MyFoods from './Pages/MyFoods';
import MyOrders from './Pages/MyOrders';
import PrivateRoot from './Components/PrivateRoot';
import { HelmetProvider } from 'react-helmet-async';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/allfoods",
        element: <AllFoods></AllFoods>
      },
      {
        path: "/singlefood/:id",
        element: <SingleFood></SingleFood>,
        loader: ({ params }) => fetch(`https://server-food-ochre.vercel.app/singlefood/${params.id}`)
      },
      {
        path: "/foodpurchase/:id",
        element: <PrivateRoot><FoodPurchase></FoodPurchase></PrivateRoot>,
        loader: ({ params }) => fetch(`https://server-food-ochre.vercel.app/foodpurchase/${params.id}`)
      },
      {
        path: "/gallery",
        element: <Gellery></Gellery>
      },
      {
        path: "/addfood",
        element: <PrivateRoot> <AddFoods></AddFoods></PrivateRoot>
      },
      {
        path: "/myfoods",
        element: <PrivateRoot><MyFoods></MyFoods></PrivateRoot>
      },
      {
        path: "/myorders",
        element: <PrivateRoot><MyOrders></MyOrders></PrivateRoot>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <HelmetProvider>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </HelmetProvider>
  </AuthProvider>
)


