import React from 'react';
import Image from 'next/image'


function BannerConvocatory() {
    
    return (
        <Image 
        src='/images/bannerConvoc.png'
        alt='Imersões * Convocatória'
        width={1849}
        height={295}
        layout='responsive'
        />
    );
}

export default BannerConvocatory;

