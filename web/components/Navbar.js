import React from 'react';
import { FaYoutube, FaInstagram, FaFacebookSquare } from 'react-icons/fa'


const Navbar = () => {
    return (
            <nav>
                <div id='header'>
                    <h5>Governo Federal, Governo do Estado do Rio de Janeiro, <br /> 
                        Secretaria de Cultura e Economia Criativa do Rio de Janeiro, <br /> 
                        por meio da Lei Aldir Blanc <span>apresentam</span> </h5>
                    <span id='social'>                        
                        <FaFacebookSquare />
                        <FaInstagram />
                        <FaYoutube />
                    </span>
                </div>
                <ul>
                    <li>Home</li>
                    <li>Convocatória</li>
                    <li>FAQ</li>
                    <li>Programação</li>
                    <li>Palestrantes</li>
                    <li>Suporte</li>
                </ul>
            </nav>
    )
}

export default Navbar;