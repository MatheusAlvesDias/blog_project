
import { Outlet } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import Navbar from './componentes/Navbar'

function App() {
  

  return (
    <div className='App'>
      <Navbar/>
      <div className="container">
      <Outlet/>
      </div>
    </div>
  )
}

export default App
