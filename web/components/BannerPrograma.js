import React from 'react';
import Image from 'next/image'


function BannerPrograma() {
    
    return (
        <Image 
        src='/images/bannerPrograma.png'
        alt='Imersões * Programações'
        width={1849}
        height={295}
        layout='responsive'
        />
    );
}

export default BannerPrograma;

