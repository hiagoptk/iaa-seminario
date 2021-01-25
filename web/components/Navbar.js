import React from 'react';
import { FaYoutubeSquare, FaInstagram, FaFacebookSquare } from 'react-icons/fa';

const Navbar = () => {
    return (
        
            <nav>
                <div id='header'>
                    <div className='boxHeader'>
                        <h5>
                            <b>Casa França-Brasil, Governo Federal, Governo do Estado do Rio de Janeiro, 
                            Secretaria de Estado de Cultura e Economia Criativa do Rio de Janeiro, 
                            através da Lei Aldir Blanc</b> <span>apresentam</span>
                        </h5>
                    </div>
                    <span id='social'>                        
                        <a href='https://www.facebook.com/seminarioimersoes' target='_blank' id='fbBold'><FaFacebookSquare /></a>
                        <a href='https://www.instagram.com/seminarioimersoes/' target='_blank' id='igBold'><FaInstagram /></a>
                        <a href='https://www.youtube.com/channel/UCQzNqcPI1z1MJzjXdalWqfw' target='_blank' id='ytBold'><FaYoutubeSquare /></a>
                    </span>
                </div>
                <ul>
                    <li> <a href='/'>HOME </a></li>
                    <li> <p>*</p> </li>
                    <li> <a href='/convocatoria'>CONVOCATÓRIA</a></li>
                    <li> <p>*</p> </li>
                    <li> <p>PROGRAMAÇÃO</p></li>
                    <li> <p>*</p> </li>
                    <li> <p>PALESTRANTES</p></li>
                    <li> <p>*</p> </li>
                    <li> <a href='/contato'>CONTATO  </a></li>
                </ul>
            </nav>
    )
}

export default Navbar;
