
import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import Home from './pages/homepage'

function App() {
const router = createBrowserRouter([
  {
    path:'/register',
    element:<Register/>
  },

  {
    path:'/login',
    element:<Login/>
  },

  {
     path:'/dashboard',
    element:<Dashboard/>
  },

  {
     path:'/',
    element:<Home/>
  }
])

  return (
    <div>
    <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
   <RouterProvider router={router}/>
    </div>
  )
}

export default App
