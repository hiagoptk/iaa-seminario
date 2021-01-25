import React from 'react';
import Image from 'next/image'


function BannerConvocatory() {
    
    return (
        <Image 
        src='/images/bannerConvoc.png'
        alt='Imersões * Convocatória'
        width={1873}
        height={331}
        layout='responsive'
        />
    );
}

export default BannerConvocatory;

