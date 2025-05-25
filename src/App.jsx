import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './Pages/Home';
import Error404 from './Pages/Error404';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },  {
    path: "*",
    element: <Error404/>,
  },
]);


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App