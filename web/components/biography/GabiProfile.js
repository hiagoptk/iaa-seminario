import React from 'react';
import Image from 'next/image';


const GabiProfile = () => {
    
    return (
        <Image 
        src='/images/04_GabiMatos.png'
        alt='Imersões * Palestrante'
        width={502}
        height={467}
        layout='responsive'
        />
    );
}

export default GabiProfile;