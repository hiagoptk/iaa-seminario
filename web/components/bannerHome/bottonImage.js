import React from 'react';
import Image from 'next/image';


const BottonImage = () => {
    
    return (
        <Image 
            src='/images/bottonImageBanner.png'
            alt='Imersões * Palestrante'
            width={2040}
            height={2642}
            layout='responsive'
        />
    );
}

export default BottonImage;
