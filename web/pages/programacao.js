import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar';
import BannerPrograma from '../components/BannerPrograma';
import Footer from '../components/Footer';


const Contato = () => {
    return (
        <>
             <Head>
              <title>Seminário Imersões</title>
              <link rel="shortcut icon" type="image/x-icon" href='/images/favicon.ico' />
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
                            <b>Jocelino Pessoa</b> <span className='prof'>(Produtor Cultural/RJ)</span></p>
                    </div>

                    <div>
                        <p><b>18h às 20h - Atravessamentos Contemporâneos</b> (Mesa de abertura)</p>

                        <p>A condição contemporânea dos atravessamentos entre arte e arquitetura, no campo ampliado
                            da cultura, reconfiguram e desestabilizam os pensamentos da formação clássica no campo da
                            arquitetura, uma disciplina que se desenvolveu, historicamente, voltada para classes sociais
                            mais abastadas. Situar o debate nessa relação fronteiriça, potencializando esta zona de
                            contato, apresenta-se como caminho possível de insurgência e enfrentamento diante das
                            históricas desigualdades envolvidas nas questões de classe, gênero e etnicidade.</p>

                        <p><span>PALESTRANTES</span> <br /> 
                            <b>André Carvalho</b> <span className='prof'>(Arquiteto e Urbanista/RJ)</span>  
                            <b> Patti Anahory</b> <span className='prof'>(Arquiteta, Cabo Verde)</span></p>
                        
                        <p><span>MEDIADORA</span> <br /> 
                            <b>Tania Queiroz</b> <span className='prof'>(Organização/RJ)</span></p>
                    </div>

                </div>

                <div className='separa red'> 
                 <p> * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * </p>
                </div>

                <div className='box boxItem'> 
                
                    <h5> SEGUNDO DIA</h5>
                
                    <h2 className='red'> 3 MARÇO </h2>
                
                    <p><b>17h às 20h -  Arte e Arquitetura </b></p>
                    
                    <p>As relações entre arte e arquitetura ampliam-se, desde criações de ambientes e construções aos projetos que se efetivam, 
                        a partir das urgências sociais. A forma, paradigma comum às duas áreas, atravessa compreensões sociais que se direcionam 
                        aos distintivos de gênero, classe e etnicidade.</p>

                    <p><span>PALESTRANTES</span> <br /> 
                        <b>Bárbara Copque</b> <span className='prof'>(Artista/RJ)</span>, <b>Cadu</b> <span className='prof'>(Artista e Professor/RJ)</span> <br /> <b>Joice Berth</b> <span className='prof'>(Arquiteta, Urbanista e Escritora/SP)</span> </p>
            
                    <p><span>MEDIADOR</span> <br />
                        <b>João Paulo Quintella</b> <span className='prof'>(Curador de Arte/RJ)</span></p>

                </div>

                <div className='separa blue'> 
                 <p> * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * </p>
                </div>

                <div className='box boxItem'> 
                
                    <h5> TERCEIRO DIA</h5>
                
                    <h2 className='blue'> 4 MARÇO </h2>
                
                    <p><b>17h às 20h - Habitação social</b></p>

                    <p>As desigualdades sociais marcam a ocupação dos espaços urbanos. Com isso, as tarefas da arquitetura tornam-se necessárias 
                        na solução de questões básicas da moradia. Porém, iniciativas, muitas vezes, destinadas ao lucro criam segregações ainda 
                        mais complexas, nas quais o pensamento modular retira elementos da subjetividade de moradores e a valorização imobiliária 
                        segue em busca de lucros irresponsáveis. Esses modelos hegemônicos não abarcam outras ideias de morar, habitar e existir. 
                        De que modo equacionar o direito à cidade com interesses políticos especulativos na compreensão de soluções já existentes, 
                        advindas dos próprios grupos segregados?</p>

                    <p><span>PALESTRANTES</span> <br /> <b>Maurício Hora</b> <span className='prof'>(Artista/RJ)</span>, <b>Raquel Rolnik</b> <span className='prof'>(Arquiteta e Urbanista/SP)</span> <br /> 
                    <b>William Bittar</b> <span className='prof'>(Arquiteto e Professor/RJ)</span> </p>
                    <p><span>MEDIADORA</span> <br /> <b>Patricia Oliveira</b> <span className='prof'>(Arquiteta/RJ)</span></p>

                </div>

                <div className='separa red'> 
                 <p> * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * </p>
                </div>

                <div className='box boxItem'> 
                
                    <h5> QUARTO DIA</h5>
                
                    <h2 className='red'> 5 MARÇO </h2>
                
                    <p><b>17h às 20h - Arquitetura e alteridades</b></p>
                    
                    <p>Pobreza, subdesenvolvimento, etnicidade são interseções que se apresentam ao tratarmos dos modos de habitar. 
                        Sempre houve um intervalo, um abismo entre desenhar, projetar, construir e os usos da casa com suas tradições ancestrais. 
                        O encontro entre arquitetura e sonho, arquitetura e reza, arquitetura e natureza tornou-se, cada vez mais, fundamental. </p>

                    <p><span>PALESTRANTES</span> <br />
                        <b>Gabriela Gaia</b> <span className='prof'>(Arquiteta/BA)</span>, <b>Sallisa Rosa</b> <span className='prof'>(Artista/RJ)</span> </p>
                    
                    <p><span>MEDIADOR</span> <br /> 
                        <b>Marcelo Campos</b> <span className='prof'>(Curador de Arte do Imersões/RJ)</span></p>

                </div>

                
              
            </div>

            <div id='footerConvocatory'>
                <Footer />
            </div>
        </>

    )
}

export default Contato;