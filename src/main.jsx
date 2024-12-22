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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/allfoods",
        element: <AllFoods></AllFoods>
      },
      {
        path:"/singlefood",
        element: <SingleFood></SingleFood>
      },
      {
        path:"/gallery",
        element: <Gellery></Gellery>
      },
      {
        path:"/addfood",
        element:  <AddFoods></AddFoods>
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path:"/register",
        element: <Register></Register>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </AuthProvider>
)


