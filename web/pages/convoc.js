import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar';
import BannerMobile from '../components/BannerMobile';
import BannerConvocatory from '../components/BannerConvocatory';


const Convocatory = () => {
    return (
        <>
             <Head>
                <title>Seminário IAA</title>
            </Head>
            
            <Navbar />
                
            <div className='main'>
                
                <div className='boxBannerConvoc' >
                    <BannerConvocatory />
                </div> 
                    
                <div className='boxBannerMobile' >
                    <BannerMobile />               
                </div> 
                
                
                <div className='box' >
                    <p>A presente chamada propõe a seleção de apresentações em vídeo de até 4’ 59” (quatro minutos de cinquenta e nove segundos)
                       de duração com vivências, reflexões, impressões, práticas artísticas, urbanísticas e arquitetônicas que possam contribuir 
                       para as discussões empreendidas pelo Seminário Imersões: arte e arquitetura, proporcionando outras interfaces ao ampliar o 
                       debate para além das falas das (dos) palestrantes. Interessa ao projeto apresentar experiências, oriundas do meio acadêmico, 
                       artístico e/ou de comunidades e movimentos sociais, que se coloquem como insurgência ou alternativa às estruturas hegemônicas. </p>
                    
                    <p>O prazo para submissão de trabalhos vai das 00h de 2 de fevereiro de 2021 até as 18h de 12 de fevereiro de 2021 (horário de Brasília).</p>


                    <div id='buttonBox'>
                        
                    </div>
                </div>
              
            </div>
        </>

    )
}

export default Convocatory;