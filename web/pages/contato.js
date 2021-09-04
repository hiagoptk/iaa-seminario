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
                   <p>
                       SEMINÁRIO <br>
                       ORGANIZAÇÃO e CURADORIA<br>

                        André Carvalho<br>
                        Jocelino Pessoa<br>
                        Marcelo Campos<br>
                        Tania Queiroz<br>
                   </p>
                </div>
              
            </div>

            <div id='footerConvocatory'>
                <Footer />
            </div>
        </>

    )
}

export default Contato;
