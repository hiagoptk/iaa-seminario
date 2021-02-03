import React from 'react';
import Image from 'next/image'


function BannerPalestrantes() {
    
    return (
        <Image 
        src='/images/bannerPalestrantes.png'
        alt='Imersões * Palestrantes'
        width={1849}
        height={295}
        layout='responsive'
        />
    );
}

export default BannerPalestrantes;

