import React from 'react'

const Button = () => {
    return ( 
        <>
            <button className='button' id='pdfConvocatory'>
                <a href='https://drive.google.com/file/d/1ZYlrC7TAX4_Y2zxCmbTuRPLUNTrLNs-n/view?usp=sharing' target='_blank'> CONVOCATÓRIA </a>
            </button>
   
            <button className='button' id='pdfFAQ' >
                <a href='https://drive.google.com/file/d/1ITLwNAM_GgdWXW1u38wAIi7sH4HQTQ3W/view?usp=sharing' target='_blank'>  FAQ </a>
            </button>
   
            <a href='https://docs.google.com/forms/d/1qF_8qfsI5sj6Z6Bu9Xr2czZNMzVhAExqQS7VtdV9QZE/edit' target='_blank'>
                <button className='button' id='form' disabled>
                    INSCREVA-SE
                </button>
            </a>
        </>
    );

};

export default Button;