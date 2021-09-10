import React from 'react'

const Button = () => {
    return ( 
        <>
            <button className='button' id='pdfConvocatory'>
                <a href='https://drive.google.com/file/d/1ZYlrC7TAX4_Y2zxCmbTuRPLUNTrLNs-n/view?usp=sharing' target='_blank'> CONVOCATÓRIA </a>
            </button>
   
            <button className='button' type="submit" onclick="window.location.href='FAQ-final.pdf'" id='pdfFAQ' >
                  FAQ 
            </button>
   
            
            <button className='button' id='form' >
                <a href='https://drive.google.com/file/d/11YEBU9fIvCzd8P2WwAz7dK8693MSU8Ou/view?usp=drivesdk' target='_blank'>RESULTADO </a>
            </button>
            
        </>
    );

};

export default Button;
