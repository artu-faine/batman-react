import React from 'react'
import '../styles.css'

function Button(props){

    const geral = 'geral';

    return (
        <button className={props.active ? 'button' : 'disabled'} >{props.name} {geral}</button>
    )
}

export default Button