import React from 'react';
import { FaYoutube, FaInstagram, FaFacebookSquare } from 'react-icons/fa'
import { IoIosMegaphone,IoMdHelp, IoHome } from 'react-icons/io'
import { ImHome2, ImTv, ImUsers, ImWrench } from "react-icons/im";

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
                    <li>Home <ImHome2 className='navIcon' /></li>
                    <li>Convocatória <IoIosMegaphone className='navIcon'/></li>
                    <li>FAQ <IoMdHelp className='navIcon'/> </li>
                    <li>Programação <ImTv className='navIcon'/> </li>
                    <li>Palestrantes <ImUsers className='navIcon'/></li>
                    <li>Suporte <ImWrench className='navIcon'/></li>
                </ul>
            </nav>
    )
}

export default Navbar;