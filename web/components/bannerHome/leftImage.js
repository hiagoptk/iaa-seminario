import React from 'react';
import Image from 'next/image';


const leftImage = () => {
    
    return (
        <Image 
            src='/images/leftImageBanner.png'
            alt='Imersões * Palestrante'
            width={2040}
            height={2642}
            layout='responsive'
        />
    );
}

export default leftImage;
