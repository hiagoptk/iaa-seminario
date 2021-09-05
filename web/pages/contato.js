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
                
                <div className='box' id='boxContato'>
                   <ol>
                    <li><b> SEMINÁRIO </b></li>
                    <li><b> ORGANIZAÇÃO e CURADORIA </b></li>
                    <li> André Carvalho </li>
                    <li> Jocelino Pessoa </li>
                    <li> Marcelo Campos</li>
                    <li> Tania Queiroz</li>
                    <li> <br/> </li>
                    <li><b> DESIGN </b></li>
                    <li> Lygia Santiago </li>
                    <li> <br/> </li>
                    <li> <b>COMUNICAÇÃO</b></li>
                    <li> Rubia Mazzini</li>
                    <li> Roberta Campos</li>
                    <li> <br/> </li>
                    <li><b> ASSESSORIA DE IMPRENSA</b></li>
                    <li> Rita Fernandes</li>
                    <li> Márcio Martins</li>
                    <li> <br/> </li>
                    <li><b> SITE</b></li>
                    <li> Hiago Patrick</li>
                    <li> <br/> </li>
                    <li> <b>PRODUÇÃO AUDIOVISUAL e STREAMING</b></li>
                    <li> Luigi William </li>
                    <li> Rafael Gusmão</li>
                    <li> <br/> </li>
                    <li> <b>LIBRAS</b></li>
                    <li> Ivoneide Amaral</li>
                    <li> Ivoleides Amaral</li>
                    <li> Ivoneila Amaral</li>
                    <li> <br/> </li>
                    <li> <b>PUBLICAÇÃO</b></li>
                    <li> <b>ORGANIZAÇÃO</b></li>
                    <li> André Carvalho</li>
                    <li> Jocelino Pessoa</li>
                    <li> Marcelo Campos</li>
                    <li> Tania Queiroz</li>
                    <li> <br/> </li>
                    <li> <b>COORDENAÇÃO EDITORIAL</b></li>
                    <li> Rubia Mazzini</li>
                    <li> <br/> </li>
                    <li> <b>DESIGN</b></li>
                    <li> Lygia Santiago</li>
                    <li> <br/> </li>
                    <li> <b>REVISÃO DE TEXTO</b></li>
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
