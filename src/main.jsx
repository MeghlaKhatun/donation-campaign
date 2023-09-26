import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
// import Banner from './Components/Banner/Banner';
import Cards from './Components/Cards/Cards';
import CardDetails from './Components/CardDetails/CardDetails';
import Donation from './Components/Donation/Donation';
import Statistics from './Components/Statisticts/Statistics';
import ErrorPage from './Components/ErronrPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Cards></Cards>,
        loader:()=>fetch('/donate.json')
      },
      {
        path:'/card/:id',
        element:<CardDetails></CardDetails>,
        loader:()=>fetch('/donate.json')
      },
      {
        path:"/donation",
        element:<Donation></Donation>,
        loader:()=>fetch('/donate.json')
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
