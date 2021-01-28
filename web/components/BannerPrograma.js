import React from 'react';
import Image from 'next/image'


function BannerPrograma() {
    
    return (
        <Image 
        src='/images/bannerPrograma.png'
        alt='Imersões * Programações'
        width={1873}
        height={331}
        layout='responsive'
        />
    );
}

export default BannerPrograma;

