import React from 'react';
import { FaYoutube, FaInstagram, FaFacebookSquare } from 'react-icons/fa'
import { IoIosMegaphone } from 'react-icons/io'
import { IoTvOutline } from 'react-icons/io5'
import { ImHome2, ImWrench } from "react-icons/im";


const Navbar = () => {
    return (
            <nav>
                <div id='header'>
                    <h5>Governo Federal, Governo do Estado do Rio de Janeiro, <br /> 
                        Secretaria de Cultura e Economia Criativa do Rio de Janeiro, <br /> 
                        por meio da Lei Aldir Blanc e Casa França <span>apresentam</span> </h5>
                    <span id='social'>                        
                        <FaFacebookSquare />
                        <FaInstagram />
                        <FaYoutube />
                    </span>
                </div>
                <ul>
                    <li> <a href='/'>HOME </a></li>
                    <li> <a href='/convoc'>CONVOCATÓRIA <IoIosMegaphone className='navIcon'/> </a></li>
                    <li> <a href='/convoc'>PROGRAMAÇÃO </a></li>
                    <li> <a href='/help'>SUPORTE  </a></li>
                </ul>

             
                
            </nav>
    )
}

export default Navbar;