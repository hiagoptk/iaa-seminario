import React from 'react';
import Image from 'next/image';


const MarceloProfile = () => {
    
    return (
        <Image 
        src='/images/10_Marcelo.png'
        alt='Imersões * Palestrante'
        width={502}
        height={467}
        layout='responsive'
        />
    );
}

export default MarceloProfile;