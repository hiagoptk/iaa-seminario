import React from 'react';
import Image from 'next/image'
import { render } from 'react-dom';

function Banner() {
    
    return (
        <Image 
        src='/images/banner.png'
        alt='Imersões * Arte e Arquitetura'
        width={3498}
        height={904}
        layout='responsive'
        />
    );
}

export default Banner;