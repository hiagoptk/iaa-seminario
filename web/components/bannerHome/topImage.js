import React from 'react';
import Image from 'next/image';


const TopImage = () => {
    
    return (
        <Image 
            src='/images/topImageBanner.png'
            alt='Imersões * Palestrante'
            width={2040}
            height={2642}
            layout='responsive'
        />
    );
}

export default TopImage;
