import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import "./NavBar.css";

const NavBar = () => {
    const [search, setSearch] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();  //não deixa a pag atulizar ao submeter o form     
        console.log(search);
    }

    return (
        <nav id="navbar">
            <h2>
                <Link to='/'>
                    <BiCameraMovie /> MoviesCatalog
                </Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Busque seu filme" 
                    onChange={(e) => setSearch(e.target.value)} 
                    value={search}  //isso permite manipular o estado diretamente
                />
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    )
}

export default NavBar;