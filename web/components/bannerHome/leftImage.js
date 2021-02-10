import React from 'react';
import Image from 'next/image';


const leftImage = () => {
    
    return (
        <Image 
            src='/images/leftImageBanner.png'
            alt='Imersões * Palestrante'
            width={1020}
            height={1321}
            layout='responsive'
        />
    );
}

export default leftImage;
