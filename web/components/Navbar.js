import React from 'react';
import { FaYoutube, FaInstagram, FaFacebookSquare } from 'react-icons/fa'

const Navbar = () => {
    return (
        
            <nav>
                <div id='header'>
                    <div className='boxHeader'>
                        <h5><b>Governo Federal, Governo do Estado do Rio de Janeiro,  
                            Secretaria de Cultura e Economia Criativa do Rio de Janeiro, 
                            por meio da Lei Aldir Blanc</b> e <b>Casa França</b> <span>apresentam</span>
                        </h5>
                    </div>
                    <span id='social'>                        
                        <a href='https://www.facebook.com/seminarioimersoes'><FaFacebookSquare /></a>
                        <a href='https://www.instagram.com/seminarioimersoes/'><FaInstagram /></a>
                        <a href='https://www.youtube.com/channel/UCQzNqcPI1z1MJzjXdalWqfw'><FaYoutube /></a>
                    </span>
                </div>
                <ul>
                    <li> <a href='/'>HOME </a></li>
                    <li> * </li>
                    <li> <a href='/convoc'>CONVOCATÓRIA</a></li>
                    <li> * </li>
                    <li> <a href='/convoc'>PROGRAMAÇÃO </a></li>
                    <li> * </li>
                    <li> <a href='/convoc'>PALESTRANTES </a></li>
                    <li> * </li>
                    <li> <a href='/convoc'>CONTATO  </a></li>
                </ul>
            </nav>
    )
}

export default Navbar;
