import React from 'react';
import Image from 'next/image';


const RightImage = () => {
    
    return (
        <Image 
            src='/images/rightImageBanner.png'
            alt='Imersões * Palestrante'
            width={1020}
            height={1321}
            layout='responsive'
        />
    );
}

export default RightImage;
