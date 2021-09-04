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
                   <ol>
                    <li><b> SEMINÁRIO </b></li>
                    <li><b> ORGANIZAÇÃO e CURADORIA </b></li>
                    <li> André Carvalho </li>
                    <li> Jocelino Pessoa </li>
                    <li> Marcelo Campos</li>
                    <li> Tania Queiroz</li>
                   </ol>
                </div>
                
                <div className='box' id='boxContato' >
                   <ol>
                    <li> DESIGN</li>
                    <li> Lygia Santiago </li>
                   </ol>

                   <ol>
                    <li> COMUNICAÇÃO</li>
                    <li> Rubia Mazzini</li>
                    <li> Roberta Campos</li>
                   </ol>
                </div>
                
                <div className='box' id='boxContato' >

                   <ol>
                    <li> ASSESSORIA DE IMPRENSA</li>
                    <li> Rita Fernandes</li>
                    <li> Márcio Martins</li>
                   </ol>
                 </div>
                
                 <div className='box' id='boxContato' >
                   <ol>
                    <li> SITE</li>
                    <li> Hiago Patrick</li>
                   </ol>
                 </div>
                
                 <div className='box' id='boxContato' >
                   <ol>
                    <li> PRODUÇÃO AUDIOVISUAL e STREAMING</li>
                    <li> Luigi William </li>
                    <li> Rafael Gusmão</li>
                   </ol>
                 </div>
                
                 <div className='box' id='boxContato' >
                   <ol>
                    <li> LIBRAS</li>
                    <li> Ivoneide Amaral</li>
                    <li> Ivoleides Amaral</li>
                    <li> Ivoneila Amaral</li>
                   </ol>
                 </div>
                
                 <div className='box' id='boxContato' >
                   <ol>
                    <li> PUBLICAÇÃO</li>
                    <li> ORGANIZAÇÃO</li>
                    <li> André Carvalho</li>
                    <li> Jocelino Pessoa</li>
                    <li> Marcelo Campos</li>
                    <li> Tania Queiroz</li>
                   </ol>
                 </div>
                
                 <div className='box' id='boxContato' >
                   <ol>
                    <li> COORDENAÇÃO EDITORIAL</li>
                    <li> Rubia Mazzini</li>
                   </ol>
                 </div>
                
                 <div className='box' id='boxContato' >
                   <ol>
                    <li> DESIGN</li>
                    <li> Lygia Santiago</li>
                   </ol>
                 </div>
                
                 <div className='box' id='boxContato' >
                   <ol>
                    <li> REVISÃO DE TEXTO</li>
                    <li> Fred Girauta</li>
                  </ol>
                </div>
              
            </div>

            <div id='footerConvocatory'>
                <Footer />
            </div>
        </>

    )
}

export default Contato;
