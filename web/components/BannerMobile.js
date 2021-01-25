import React from 'react';
import Image from 'next/image'


function BannerMobile() {
    
    return (
        <Image 
        src='/images/bannerMobile.png'
        alt='Imersões * Arte e Arquitetura'
        width={1173}
        height={441}
        layout='responsive'
        />
    );
}

export default BannerMobile;