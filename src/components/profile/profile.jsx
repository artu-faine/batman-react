import React, { useContext, useEffect, useMemo, useRef } from 'react'
import '../styles.css'
import { UserContext } from '../../contexts/usercontext'

function Profile(){

    const {login} = useContext(UserContext);
    let video = useRef();

    let valorMemorizado = useMemo(() => {
        console.log("Executou o Memo.");
    }, [login]);

    useEffect(() => {


        // console.log('Executou pela primeira vez.');
        // console.log('Ação de login.');
        console.log(video);

    }, [login]);

    return (
        <>
        <div>
            <div>{login ? 'dados': 'Faça seu login para ter acesso as suas informações.'}
            </div>
            <video ref={video}></video>
            {/* <div ref={video}></div> */}
            
        </div>
        </>
    )
}

export default Profile