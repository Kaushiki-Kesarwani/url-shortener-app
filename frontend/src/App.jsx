
import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

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
  }
])

  return (
    <div>
    <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
    </div>
  )
}

export default App
