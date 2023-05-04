import Button from "../Button";
import CartWidget from "../CartWidget/CartWidget.jsx";

const NavBar = () => {
return <nav>
    <h3>SEGUI A LIZ</h3>
    <div className="botones">
        <button>Home</button>
        <button>Quienes Somos</button>
        <button>Nuestros Vinos</button>
    
    
    </div>
    <CartWidget />
</nav>
}

export default NavBar