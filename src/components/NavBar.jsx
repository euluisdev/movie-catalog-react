import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <nav id="navbar">
            <h2>
                <Link to='/'>MoviesCatalog</Link>
            </h2>
            <form>
                <input type="text" placeholder="Busque seu filme" />
                <button type="submit"></button>
            </form>
        </nav>
    )
}

export default NavBar;