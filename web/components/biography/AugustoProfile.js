import React from 'react';
import Image from 'next/image';


const AugustoProfile = () => {
    
    return (
        <Image 
            src='/images/01_Augusto.png'
            alt='Imersões * Palestrante'
            width={502}
            height={467}
            layout='responsive'
        />
    );
}

export default AugustoProfile;
