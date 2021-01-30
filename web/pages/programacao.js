import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar';
import BannerPrograma from '../components/BannerPrograma';
import Footer from '../components/Footer';


const Contato = () => {
    return (
        <>
             <Head>
                <title>Seminário IAA</title>
            </Head>
            
            <Navbar />
                
            <div className='main' id='program'>
                
                <div className='boxBannerPrograma' >
                    <BannerPrograma />
                </div> 
                
                <div className='box' id='topoPrograma' >
                   
                   <p>Todas as mesas serão transmitidas ao vivo pela Internet e terão tradução simultânea para LIBRAS.</p>
                   <p id ='anoucer'><b>Os participantes previamente inscritos receberão certificado. Faça sua inscrição gratuita aqui. </b></p>
                </div>

                
                <div className='separa blue'> 
                 <p> * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * </p>
                </div>


                <div className='box boxItem'>  
                
                    <h5> PRIMEIRO DIA</h5>
                
                    <h2 className='blue'> 2 MARÇO </h2>
                    <div id='block'>
                        <p><b>16h às 17h30 - Patrimônio e Cidade </b> (Mesa institucional)</p>
                        <p><span>PALESTRANTES</span> <br /> 
                            <b>Augusto Ivan</b> <span className='prof'>(Arquiteto/RJ)</span> <b> Helena Severo</b> <span className='prof'>(Diretora da Casa França-Brasil/RJ)</span></p>
                        <p><span>CONVIDADA</span> <br /> 
                            <b>Danielle Barros</b> <span className='prof'>(Secretária de Cultura do Estado do Rio de Janeiro/RJ)</span></p>
                        <p><span>MEDIADOR</span>  <br />
                            <b>Jocelino Pessoa</b> <span className='prof'>(Produtor cultural/RJ)</span></p>
                    </div>

                    <div>
                        <p><b>18h às 20h - Atravessamentos Contemporâneos</b> (Mesa de Abertura)</p>

                        <p>A condição contemporânea dos atravessamentos entre arte e arquitetura, no campo ampliado
                            da cultura, reconfiguram e desestabilizam os pensamentos da formação clássica no campo da
                            arquitetura, uma disciplina que se desenvolveu, historicamente, voltada para classes sociais
                            mais abastadas. Situar o debate nessa relação fronteiriça, potencializando esta zona de
                            contato, apresenta-se como caminho possível de insurgência e enfrentamento diante das
                            históricas desigualdades envolvidas nas questões de classe, gênero e etnicidade.</p>

                        <p><span>CONVIDADOS</span> <br /> 
                            <b>André Carvalho</b> <span>(Arquiteto e urbanista/RJ)</span>  
                            <b> Patti Anahory</b> <span>(Arquiteta, Cabo Verde)</span></p>
                        
                        <p><span>MEDIAÇÃO</span> <br /> 
                            <b>Tania Queiroz</b> <span>(Organização/RJ)</span></p>
                    </div>

                </div>

                <div className='separa red'> 
                 <p> * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * </p>
                </div>

                <div className='box boxItem'> 
                
                    <h5> SEGUNDO DIA</h5>
                
                    <h2 className='red'> 3 DE MARÇO </h2>
                
                    <p><b>17h às 20h -  Arte e Arquitetura </b></p>
                    
                    <p>As relações entre arte e arquitetura ampliam-se, desde criações de ambientes e construções aos projetos que se efetivam, 
                        a partir das urgências sociais. A forma, paradigma comum às duas áreas, atravessa compreensões sociais que se direcionam 
                        aos distintivos de gênero, classe e etnicidade.</p>

                    <p><span>CONVIDADOS</span> <b>Bárbara Copque</b> (Artista/RJ), <b>Cadu</b> (Artista e Professor da PUC Rio) e <b>Joice Berth</b> (Arquiteta, urbanista e escritora/SP) </p>
            
                    <p><span>MEDIADOR</span>: <b>João Paulo Quintella</b> (Curador/RJ)</p>

                </div>

                <div className='separa blue'> 
                 <p> * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * </p>
                </div>

                <div className='box boxItem'> 
                
                    <h5> TERCEIRO DIA</h5>
                
                    <h2 className='blue'> 4 DE MARÇO </h2>
                
                    <p><b>17h às 20h - Habitação social</b></p>

                    <p>As desigualdades sociais marcam a ocupação dos espaços urbanos. Com isso, as tarefas da arquitetura tornam-se necessárias 
                        na solução de questões básicas da moradia. Porém, iniciativas, muitas vezes, destinadas ao lucro criam segregações ainda 
                        mais complexas, nas quais o pensamento modular retira elementos da subjetividade de moradores e a valorização imobiliária 
                        segue em busca de lucros irresponsáveis. Esses modelos hegemônicos não abarcam outras ideias de morar, habitar e existir. 
                        De que modo equacionar o direito à cidade com interesses políticos especulativos na compreensão de soluções já existentes, 
                        advindas dos próprios grupos segregados?</p>

                    <p><span>CONVIDADOS</span> <b>Maurício Hora</b> (Artista e ativista social/RJ), <b>Raquel Rolnik</b> (Arquiteta e urbanista/SP) e <b>William Bittar</b> (Arquiteto e Professor emérito da FAU-UFRJ) </p>
                    <p><span>MEDIADOR</span>: <b>Patricia Oliveira</b> (Arquiteta/RJ)</p>

                </div>

                <div className='separa red'> 
                 <p> * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * </p>
                </div>

                <div className='box boxItem'> 
                
                    <h5> QUARTO DIA</h5>
                
                    <h2 className='red'> 5 DE MARÇO </h2>
                
                    <p><b>17h às 20h - Arquitetura e alteridades</b></p>
                    
                    <p>Pobreza, subdesenvolvimento, etnicidade são interseções que se apresentam ao tratarmos dos modos de habitar. 
                        Sempre houve um intervalo, um abismo entre desenhar, projetar, construir e os usos da casa com suas tradições ancestrais. 
                        O encontro entre arquitetura e sonho, arquitetura e reza, arquitetura e natureza tornou-se, cada vez mais, fundamental. </p>

                    <p><span>CONVIDADOS</span> <b>Gabriela Gaia</b> (Artista/BA), <b>Carla Akotirene</b> (Escritora/BA) e <b>Sallisa Rosa</b> (Artista/RJ) </p>
                    
                    <p><span>MEDIADOR</span>: <b>Marcelo Campos</b> (Curador de Arte do Imersões/RJ)</p>

                </div>

                
              
            </div>

            <div id='footerConvocatory'>
                <Footer />
            </div>
        </>

    )
}

export default Contato;