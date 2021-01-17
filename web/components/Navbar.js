import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaYoutube, FaInstagram, FaFacebookSquare } from 'react-icons/fa'
import { IoIosMegaphone,IoMdHelp } from 'react-icons/io'
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
                    <li> <a href='/'>HOME <ImHome2 className='navIcon' /> </a></li>
                    <li> <a href='/convoc'>COMVOCATÓRIA <IoIosMegaphone className='navIcon'/> </a></li>
                    <li> <a href='/faq'>FAQ <IoMdHelp className='navIcon'/> </a></li>
                    <li> <a href='/programs'> PROGRAMAÇÃO <ImTv className='navIcon'/>  </a></li>
                    <li> <a href='/palestrantes'>PALESTRANTES <ImUsers className='navIcon'/> </a></li>
                    <li> <a href='/help'>SUPORTE <ImWrench className='navIcon'/> </a></li>
                </ul>

             
                
            </nav>
    )
}

export default Navbar;