import React from 'react';
import Image from 'next/image'
import { render } from 'react-dom';

function Footer() {
    
    return (
        <Image 
        src='/images/barraLogos.jpg'
        alt='Imersões * Arte e Arquitetura'
        width={416}
        height={83}
        layout='responsive'
        />
    );
}

export default Footer;