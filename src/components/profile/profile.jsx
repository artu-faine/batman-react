import React, { useContext } from 'react'
import '../styles.css'
import { UserContext } from '../../contexts/usercontext'

function Profile(){

    const {login} = useContext(UserContext);

    return (
        <div>
            {login ? 'dados': 'Faça seu login para ter acesso as suas informações.'}
        </div>
    )
}

export default Profile