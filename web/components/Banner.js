import React from 'react';
import Image from 'next/image'


function Banner() {
    
    return (
        <Image 
        src='/images/banner.png'
        alt='Imersões * Arte e Arquitetura'
        width={1749}
        height={452}
        layout='responsive'
        />
    );
}

export default Banner;