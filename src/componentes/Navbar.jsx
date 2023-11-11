import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"; 


const Navbar = () => {
  return (
   <nav className="navbar">
    <h2><Link to="/">Blog</Link></h2>
    <ul>
        <li><NavLink to={"/"} className={({isActive}) => (isActive ? "active" : "" )}>Home</NavLink></li>
        <li><NavLink to={"/new"} className="new-btn">Novo Post</NavLink></li>
        <li><NavLink to={"/admin"} >Gerenciar</NavLink></li>
    </ul>
   </nav>
  )
}

export default Navbar