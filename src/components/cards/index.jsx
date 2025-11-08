import React from 'react';
import './styles.css';

function Cards() {

    return (
    <div className='actor-cards-container'>
        <div className='cards-content'>
            <div className="card banner-1">Robert Pattison - Batman</div>
            <div className="card banner-2">Zoe Kravitz - Mulher gato</div>
            {/* <div class="card banner-3">Jeffery Wright - Gordon</div> */}
        </div>
    </div>
    )
}

export default Cards;