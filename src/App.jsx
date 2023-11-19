import React from 'react'
import Home from './part-1/home'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Select from './part-2/Select';

const router = createBrowserRouter([
  {
    path: "/As2",
    element: <Home />,
  },
  {
    path: '/As2/selection',
    element: <Select />
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App