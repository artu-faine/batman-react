import React from 'react';
import '../../components/styles.css';
import Header from '../../components/header/header';
import Profile from '../../components/profile/profile';
import Cards from '../../components/cards/index';
import './styles.css';
// import Video './styles.css';

function Home(){
    return (
        <>
            {/* <Header/> */}
            <div id='banner'></div>
            <div id='trailer-container'>
                <div className='content'>
                    <video controls className='trailer'>
                        <source />
                    </video>
                    <div id='sinopse'>
                        <p className='description'>
                            Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.
                        </p>
                        <button className='button'>
                            Comprar ingresso
                        </button>
                    </div>
                </div>
            </div>
            <Cards/>
        </>
    )
}

export default Home