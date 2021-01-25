import React from 'react';
import Image from 'next/image'


function BannerConvocatory() {
    
    return (
        <Image 
        src='/images/bannerConvoc.png'
        alt='Imersões * Arte e Arquitetura'
        width={1749}
        height={452}
        layout='responsive'
        />
    );
}

export default BannerConvocatory;

