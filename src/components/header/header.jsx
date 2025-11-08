import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles.css';
// import Logo from '../../assets/png-transparent-batman-logo-sticker-batman-logo-comics-emblem-superhero-thumbnail.png';
import Logo from '../../assets/batmanlogo.jpg';


function Header(){

    const navigate = useNavigate();

    return (
        <header>
            <img className='logo' src={Logo}/>
            <nav>
                <ul>
                    <Link style={{ textDecoration: 'none' }} to='/'>
                        <li>Home</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/contato'>
                        <li>Contato</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/fotos'>
                        <li>Fotos</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/comentarios'>
                        <li>Comentários</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header