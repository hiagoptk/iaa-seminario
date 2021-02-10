import React from 'react';
import Image from 'next/image';


const RightImage = () => {
    
    return (
        <Image 
            src='/images/rightImageBanner.png'
            alt='Imersões * Palestrante'
            width={2040}
            height={2642}
            layout='responsive'
        />
    );
}

export default RightImage;
