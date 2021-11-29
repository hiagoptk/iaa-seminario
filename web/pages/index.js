import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';
import HomeImg from '../components/HomeImg'
import Banner from '../components/Banner';
import BannerMobile from '../components/BannerMobile';


const Home = () => {
    return (
        <>
            <Head>
              <title>Seminário Imersões</title>
              <link rel="shortcut icon" type="image/x-icon" href='/images/favicon.ico' />
            </Head>

            <Navbar />

            <div className='main'>
                
                <div className='boxBannerDesktop' >
                    <Banner />
                </div>  
                
                <div className='boxBannerMobile' >
                    <BannerMobile />               
                </div> 

                <div className='box' >
        
                    <p><b>Imersões: arte e arquitetura</b> foi um seminário internacional on-line que propôs uma reflexão sobre os papéis da arquitetura e urbanismo na 
                        contemporaneidade e sua intercessão e interface com a arte. Com transmissão ao vivo pela Internet entre os dias 2 e 5 de março de 2021, seu ciclo 
                        de debates trouxe discussões que transitam nesses campos do saber, promovendo sua difusão, ao mesmo tempo em que tornam a arte contemporânea e a 
                        arquitetura responsáveis por mais compromissos sociais. </p>
        
                    <p>Os eixos centrais de <b>Imersões</b> – Arte e arquitetura, Habitação social e Arquitetura e alteridades – procuram ampliar a discussão que se apresenta 
                       Mundial de Arquitetos – UIA 2021: Todos os mundos. <b><i>Um só mundo</i></b>.</p>
        
                    <p>Os palestrantes trouxeram experiências que abordam a configuração do espaço urbano como oportunidade de contato e exercício cotidiano da cidade e da arte, 
                       discutindo transitoriedade, fluxos e outras formas de viver. Como pensar as relações entre arte, arquitetura, a humanidade e a habitação social? A quem a 
                       arquitetura se destina? A quem, de fato, atende? Quais questões permeiam e afetam, sobretudo, a vida urbana? Que questionamentos podem ser trazidos para 
                       esse campo? O que se vislumbra? </p>
        
                    <p>Premiado no edital #RetomadaCulturalRJ da Secretaria de Estado de Cultura e de Economia Criativa do Rio de Janeiro e parte integrante do calendário oficial 
                       de eventos culturais do UIA 2021, “Imersões” foi uma realização em parceria da Escola Sem Sítio, Casa França-Brasil e dos grupos de extensão e 
                       pesquisa CURA/UERJ e Linda/PUC-Rio.</p>
                    
                    <p>Assista aos vídeos <a id="linkHome" href="/programacao">aqui</a>.</p>
                  
                   <div className='boxImg'>
                        <a target='_blank' href='https://drive.google.com/uc?export=download&id=1AlbDS-9_WaMx9R7KuO0ms_rU2dSgDBUJ' >
                            <HomeImg />
                        </a>
                    </div>
                </div>
              
            </div>

            <div id='footer'>
                <Footer />
            </div>
        </>

    )
}

export default Home;
