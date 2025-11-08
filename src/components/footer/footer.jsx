import React from 'react';
import '../styles.css';
import './styles-footer.css';
import LogoFooter from '../../assets/batmanlogo.jpg';

function Footer() {
    return (
        <>
            {/* <div style={{backgroundImage: `url(${LogoFooter})`, height: '50px', width: '150px' }} className='content-footer'></div> */}
            <div className='content-footer'>
                <img src={LogoFooter} alt="" className='logo'/>
            </div>
            <div className='content-footer'>Todos os direitos reservados ©</div>
            <div className='content-footer'>Desenvolvido por: Arthur Henrique</div>
        </>
    )
}

export default Footer;