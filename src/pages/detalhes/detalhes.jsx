import React from 'react'
import '../../components/styles.css'
import { useParams } from 'react-router-dom'

function Detalhes(props){

    const params = useParams();

    console.log(params);

    return (
        <div>
            Detalhes
            <div>{params.id}</div>
        </div>
    )
}

export default Detalhes