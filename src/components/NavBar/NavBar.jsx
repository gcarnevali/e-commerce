import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget.jsx";

const NavBar = () => {
return <nav>
    <ul className="nav-menu">
    <h3><li><NavLink to='/'>SEGUI A LIZ</NavLink></li></h3>

        <li className="nav-item"><NavLink className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'} to={"/category/:categoryId"}>Nuestro Vinos</NavLink></li>
        <li className="nav-item"><NavLink className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'} to={"/category/Quienes-somos"}>Quienes Somos</NavLink></li>

    <CartWidget />
    </ul>
</nav>
}

export default NavBar