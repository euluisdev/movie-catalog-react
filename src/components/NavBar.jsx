import { useState } from "react";
import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import "./NavBar.css";

const NavBar = () => {
    const [search, setSearch] = useState('');

    return (
        <nav id="navbar">
            <h2>
                <Link to='/'>
                    <BiCameraMovie /> MoviesCatalog
                </Link>
            </h2>
            <form>
                <input 
                    type="text" 
                    placeholder="Busque seu filme" 
                    onChange={(e) => setSearch(e.target.value)} 
                    value={search}
                />
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    )
}

export default NavBar;