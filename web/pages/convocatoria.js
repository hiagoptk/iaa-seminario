import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar';
import BannerMobile from '../components/BannerMobile';
import BannerConvocatory from '../components/BannerConvocatory';
import Button from '../components/Button';
import Footer from '../components/Footer';


const Convocatory = () => {
    return (
        <>
             <Head>
              <title>Seminário Imersões</title>
              <link rel="shortcut icon" type="image/x-icon" href='/images/favicon.ico' />
            </Head>
             
            <Navbar />
                
            <div className='main'id='convocatory'>
                
                <div className='boxBannerPrograma' >
                    <BannerConvocatory />
                </div> 
                
                <div className='box' >
                    <p>A presente chamada propõe a seleção de apresentações em vídeo de até 4’59” (quatro minutos de cinquenta e nove segundos)
                       de duração com vivências, reflexões, impressões, práticas artísticas, urbanísticas e arquitetônicas que possam contribuir 
                       para as discussões empreendidas pelo <b>Seminário Imersões: arte e arquitetura</b>, proporcionando outras interfaces ao ampliar o 
                       debate para além das falas das (dos) palestrantes. Interessa ao projeto apresentar experiências, oriundas do meio acadêmico, 
                       artístico e/ou de comunidades e movimentos sociais, que se coloquem como insurgência ou alternativa às estruturas hegemônicas. </p>
                    
                    <p>O prazo para submissão de trabalhos vai das 00h de 2 de fevereiro de 2021 até as 18h de 12 de fevereiro de 2021 (horário de Brasília).</p>
                </div>
              
                <div id='buttonBox'>
                    <Button />
                </div>
            </div>

            <div id='footerConvocatory'>
                <Footer />
            </div>
        </>

    )
}

export default Convocatory;