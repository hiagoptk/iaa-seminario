import React from 'react';
import Head from 'next/head';
import Banner from '../components/Banner';
import Link  from 'next/link';
import Navbar from '../components/Navbar';
import { IoIosColorPalette } from 'react-icons/io';





const Home = () => {
    return (

        

        <>
            <Head>
              <title>Seminário Imersões</title>
              
            </Head>

            <Navbar />


            <div id='main'>
                
                <div id='banner' >
                    
                    <Banner />
                </div>                
                <div className='box' >
                    <p>Imersões: arte e arquitetura é um seminário internacional realizado pela Escola Sem Sítio, em parceria com a Casa França Brasil e os grupos de extensão CURA e Linda, respectivamente vinculados a UERJ e a PUC-Rio, que acontecerá online, com transmissão ao vivo pelo Youtube, entre os dias 2 e 5 de março de 2021. Premiado no edital #RetomadaCulturalRJ da Secretaria de Estado de Cultura e de Economia Criativa do Rio de Janeiro e parte integrante da programação paralela do  27o Congresso Mundial de Arquitetos - UIA 2021 no ano em que o Rio recebe da UNESCO o título de Capital Mundial da Arquitetura, Imersões se faz em uma zona de convergências entre as práticas artísticas, arquitetônicas, urbanísticas e educacionais. </p>
                    
                    <p>Seu ciclo de debates promoverá reflexões que transitam nesses campos do saber, promovendo sua difusão, ao mesmo tempo em que tornam a arte contemporânea e a arquitetura responsáveis por mais compromissos sociais. Como pensar as relações entre arte, arquitetura, a humanidade e a habitação social? A quem a arquitetura se destina? A quem, de fato, atende? Quais questões permeiam e afetam, sobretudo, a vida urbana? Que questionamentos podem ser trazidos para esse campo? O que se vislumbra? </p>
                    
                    <p>Confira a programação completa aqui. A partir do dia x estarão abertas as inscrições para submissão de trabalhos em vídeo que poderão ser exibidos durante as mesas de debate. A inscrição para assistir às mesas terá início no dia x.</p>

                </div>
              
            </div>
        </>

    )
}

export default Home;