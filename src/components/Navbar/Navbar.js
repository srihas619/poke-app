import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div>
            <nav className="navbar">
                <Link className="nav-h3-pokemon" to="/">
                    <h3>Pokémon</h3>
                </Link>
                <ul className="nav-links">
                    {/* <li>Pokemons</li>
                    <li>About</li> */}
                    <Link className="nav-li-pokemons" to="/pokemons">
                        <li >Pokemons</li>
                    </Link>
                    <Link className="nav-li-about" to="/about">
                        <li>About</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
