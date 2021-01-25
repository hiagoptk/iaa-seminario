import React from 'react'

const Button = () => {
    return ( 
        <>
            <a href='https://drive.google.com/file/d/1ZYlrC7TAX4_Y2zxCmbTuRPLUNTrLNs-n/view?usp=sharing' target='_blank'>
                <button className='button' id='pdfConvocatory'>
                    CONVOCATÓRIA 
                </button>
            </a>


            <a href='https://drive.google.com/file/d/1E3YY_PtWHXrgv4JQK3OTmNbDg0NdDwez/view?usp=sharing' target='_blank'>
                <button className='button' id='pdfFAQ'>
                    FAQ 
                </button>
            </a>


            <a href='https://docs.google.com/forms/d/1qF_8qfsI5sj6Z6Bu9Xr2czZNMzVhAExqQS7VtdV9QZE/edit' target='_blank'>
                <button className='button' id='form'>
                    INSCREVA-SE
                </button>
            </a>
        </>
    );

};

export default Button;