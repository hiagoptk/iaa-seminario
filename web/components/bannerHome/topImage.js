import React from 'react';
import Image from 'next/image';


const TopImage = () => {
    
    return (
        <Image 
            src='/images/topImageBanner.png'
            alt='Imersões * Palestrante'
            width={1020}
            height={1321}
            layout='responsive'
        />
    );
}

export default TopImage;
