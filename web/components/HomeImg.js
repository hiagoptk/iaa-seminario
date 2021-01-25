import React from 'react';
import Image from 'next/image'


function HomeImg() {
    
    return (
        <Image 
        src='/images/imgHome.png'
        alt='Imersões * Arte e Arquitetura'
        width={1020}
        height={1321}
        layout='responsive'
        />
    );
}

export default HomeImg;