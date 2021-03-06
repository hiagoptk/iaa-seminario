import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar';
import BannerContato from '../components/BannerContato';
import Footer from '../components/Footer';


const Contato = () => {
    return (
        <>
             <Head>
              <title>Seminário Imersões</title>
              <link rel="shortcut icon" type="image/x-icon" href='/images/favicon.ico' />
            </Head>
            
            <Navbar />
                
            <div className='main' id='convocatory'>
                
                <div className='boxBannerPrograma' >
                    <BannerContato />
                </div> 
                
                <div className='box' id='boxContato' >
                    <p>Dúvidas sobre a <b><a href='https://drive.google.com/file/d/1ZYlrC7TAX4_Y2zxCmbTuRPLUNTrLNs-n/view?usp=sharing' target='_blank'>Convocatória</a></b> poderão ser dirimidas por meio do e-mail. 
                        Para um suporte adequado, somente serão respondidas questões relativas à interpretação 
                        da convocatória e que não estejam previstas no <b><a href='https://drive.google.com/file/d/1E3YY_PtWHXrgv4JQK3OTmNbDg0NdDwez/view?usp=sharing' target='_blank'>FAQ</a></b>.</p>
                   <div className='boxContatos'>
                    <p><span>ORGANIZAÇÃO</span> <br /> <b>seminario@imersoes.arq.br</b></p>
                        
                    <p><span>ASSESSORIA DE IMPRENSA</span> <br /> <b>carolina.feital@trevocomunicativa.com.br</b></p> 
                    </div>
                </div>
              
            </div>

            <div id='footerConvocatory'>
                <Footer />
            </div>
        </>

    )
}

export default Contato;