import React from 'react';
import Head from 'next/head';
import Banner from '../components/Banner';
import Footer from '../components/Footer'
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
                    <p> <b>Imersões: arte e arquitetura</b> é um seminário internacional on-line que propõe uma 
                        reflexão sobre os papéis da arquitetura e urbanismo na contemporaneidade e sua 
                        intercessão e interface com a arte. Com transmissão ao vivo pela Internet entre os 
                        dias 2 e 5 de março de 2021, seu ciclo de debates promoverá reflexões que transitam 
                        nesses campos do saber, promovendo sua difusão, ao mesmo tempo em que tornam a 
                        arte contemporânea e a arquitetura responsáveis por mais compromissos sociais. </p>
                    
                    <p> Os eixos centrais de <b>Imersões</b> – Arte e arquitetura, Habitação social e Arquitetura 
                        e alteridades – procuram ampliar a discussão que se apresenta urgente e desdobra, no 
                        ano em que o Rio recebe da UNESCO o título de Capital Mundial da Arquitetura, o mote 
                        anunciado pelo 27o Congresso Mundial de Arquitetos – UIA 2021: <i>Todos os mundos</i>. <b>Um só 
                        mundo</b>.</p>
                    
                    <p> Os palestrantes trarão experiências que abordem a configuração do espaço urbano como 
                        oportunidade de contato e exercício cotidiano da cidade e da arte, discutindo 
                        transitoriedade, fluxos e outras formas de viver. Como pensar as relações entre arte, 
                        rquitetura, a humanidade e a habitação social? A quem a arquitetura se destina? A quem, 
                        de fato, atende? Quais questões permeiam e afetam, sobretudo, a vida urbana? Que 
                        questionamentos podem ser trazidos para esse campo? O que se vislumbra? </p>

                    <p> Premiado no edital #RetomadaCulturalRJ da Secretaria de Estado de Cultura e de 
                        Economia Criativa do Rio de Janeiro e parte integrante do calendário oficial de eventos 
                        culturais do UIA 2021, “Imersões” é uma realização em parceria da Escola Sem Sítio, 
                        Casa França-Brasil e dos grupos de extensão e pesquisa CURA/UERJ e Linda/PUC-Rio.</p>

                    <p> A partir do <b>dia 25 de janeiro</b> estarão abertas as inscrições para submissão de trabalhos 
                        em vídeo que poderão ser exibidos durante as mesas de debate. <b>A inscrição para assistir 
                        às mesas será aberta em breve.</b></p>
                </div>
              
            </div>

            <div id='footer'>
                <Footer />
            </div>
        </>

    )
}

export default Home;