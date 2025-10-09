import React, { useContext } from 'react'
import '../styles.css'
import { UserContext } from '../../contexts/usercontext';

function Header(){

    const {login, setLogin} = useContext(UserContext);

    return (
        <div>
            <ul>
                <li>Home</li>
                <li>Nome</li>
                <li>Contatos</li>
                <li onClick={() => setLogin(!login)}>{login ? 'Deslogar' : 'Login'}</li>
            </ul>
        </div>
    )
}

export default Header