import React from 'react';
import Image from 'next/image';


const BottonImage = () => {
    
    return (
        <Image 
            src='/images/bottonImageBanner.png'
            alt='Imersões * Palestrante'
            width={1020}
            height={1321}
            layout='responsive'
        />
    );
}

export default BottonImage;
