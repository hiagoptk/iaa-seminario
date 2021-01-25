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
                
                <div className='box' >
                    <p>Dúvidas sobre a <b>Convocatória</b> poderão ser dirimidas por meio do e-mail. 
                        Para um suporte <b><i>adequado</i></b>, somente serão respondidas questões relativas à interpretação 
                        da convocatória e que não estejam previstas no <b>FAQ</b>.</p>
                    
                    <p><b>Organização:</b> <i>seminario@imersoes.arq.br</i></p>
                </div>
              
            </div>

            <div id='footerConvocatory'>
                <Footer />
            </div>
        </>

    )
}

export default Contato;