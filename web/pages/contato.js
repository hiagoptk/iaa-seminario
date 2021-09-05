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
                   <ul>
                    <li><h2> SEMINÁRIO </h2></li>
                        <li><ul>
                            <li><h3> ORGANIZAÇÃO e CURADORIA </h3></li>
                            <li> André Carvalho </li>
                            <li> Jocelino Pessoa </li>
                            <li> Marcelo Campos</li>
                            <li> Tania Queiroz</li>
                            <li> <br/> </li>
                            <li><h3> DESIGN </h3></li>
                            <li> Lygia Santiago </li>
                            <li> <br/> </li>
                            <li> <h3>COMUNICAÇÃO</h3></li>
                            <li> Rubia Mazzini</li>
                            <li> Roberta Campos</li>
                            <li> <br/> </li>
                            <li><h3> ASSESSORIA DE IMPRENSA</h3></li>
                            <li> Rita Fernandes</li>
                            <li> Márcio Martins</li>
                            <li> <br/> </li>
                            <li><h3> SITE</h3></li>
                            <li> Hiago Patrick</li>
                            <li> <br/> </li>
                            <li> <h3>PRODUÇÃO AUDIOVISUAL e STREAMING</h3></li>
                            <li> Luigi William </li>
                            <li> Rafael Gusmão</li>
                            <li> <br/> </li>
                            <li> <h3>LIBRAS</h3></li>
                            <li> Ivoneide Amaral</li>
                            <li> Ivoleides Amaral</li>
                            <li> Ivoneila Amaral</li>
                            <li> <br/> </li>
                        </ul></li>
                    <li> <h2>PUBLICAÇÃO</h2></li>
                    <li> <h3>ORGANIZAÇÃO</h3></li>
                    <li> André Carvalho</li>
                    <li> Jocelino Pessoa</li>
                    <li> Marcelo Campos</li>
                    <li> Tania Queiroz</li>
                    <li> <br/> </li>
                    <li> <h3>COORDENAÇÃO EDITORIAL</h3></li>
                    <li> Rubia Mazzini</li>
                    <li> <br/> </li>
                    <li> <h3>DESIGN</h3></li>
                    <li> Lygia Santiago</li>
                    <li> <br/> </li>
                    <li> <h3>REVISÃO DE TEXTO</h3></li>
                    <li> Fred Girauta</li>
                  </ul>
                </div>
              
            </div>

            <div id='footerConvocatory'>
                <Footer />
            </div>
        </>

    )
}

export default Contato;
