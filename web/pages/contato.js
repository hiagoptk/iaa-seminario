import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar';
import BannerContato from '../components/BannerContato';
import Footer from '../components/Footer';


const Contato = () => {
    return (
        <>
             <Head>
                <title>Seminário IAA</title>
            </Head>
            
            <Navbar />
                
            <div className='main'id='convocatory'>
                
                <div className='boxBannerConvoc' >
                    <BannerContato />
                </div> 
                
                <div className='box' id='boxContato' >
                    <p>Dúvidas sobre a <b><a href='https://drive.google.com/file/d/1ZYlrC7TAX4_Y2zxCmbTuRPLUNTrLNs-n/view?usp=sharing' target='_blank'>Convocatória</a></b> poderão ser dirigidas por meio do e-mail. 
                        Para um suporte <b><i>adequado</i></b>, somente serão respondidas questões relativas à interpretação 
                        da convocatória e que não estejam previstas no <b><a href='https://drive.google.com/file/d/1E3YY_PtWHXrgv4JQK3OTmNbDg0NdDwez/view?usp=sharing' target='_blank'>FAQ</a></b>.</p>
                    
                    <p><b>Organização:</b> <i>seminario@imersoes.arq.br</i></p>
                    
                    <p><b>Acessoria de Impensa:</b><i>carolina.feital@trevocomunicativa.com.br</i></p>
                </div>
              
            </div>

            <div id='footerConvocatory'>
                <Footer />
            </div>
        </>

    )
}

export default Contato;