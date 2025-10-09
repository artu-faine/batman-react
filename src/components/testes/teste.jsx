import React, { useEffect, useState } from 'react'
import Button from '../button/button'
import Button2 from '../button/button2'
import '../styles.css'

function Teste() {
    const lista = [
    {bo: "tanois"},
    {bo: "opa"},
    {bo: "bao"},
  ]; 

  function evento() {
    alert("O evento foi disparado.");
  }


  let [carregando, setCarregando] = useState(true)

  let [contador, setContador] = useState(0)

  useEffect(() => {
  
    console.log("Executou o useEffect");

    return () => {

    }
  }, 
    [contador]);

  return (
    // <div>Hello, World!</div>
    <>
      <div>Comprar outro
        <span>alou</span>
        <div>
          {/* {lista.map((item) => (
          <>
          <div style={item.bo == "opa" ? {color: 'red'} : {color: 'green'}}>{item.bo}</div>
          </>
        ))} */}
        </div>
      </div>
      <Button name='Artu' active/> <br/>
      <Button name='Paulo'/> <br/>
      <Button2 onClick={() => {evento()}}/> <br/>
      <div>
        {carregando ? "Carregando..." : "carregado"}
        <button onClick={() => {setCarregando(!carregando)}}>{carregando ? 'Carregar' : 'Voltar a carregar'}</button><br></br>
        <span>{contador}</span>
        <button onClick={() => {setContador(contador+ 1)}}>Add</button>
      </div>
    </>
  )
}

export default Teste;