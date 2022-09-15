import React from 'react';
import TeamImage from '../../assets/images/team.svg';
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import './styles.scss';

const AboutUs = () => {
  return (
    <div className='aboutusWrapper'>
      <div className='aboutusLeftContainer'>
        <div className='aboutusTitleContainer'>
          <div className='aboutusTitle'>
            <span>Sobre</span> <strong>Nós</strong>
          </div>
        </div>

        <div className='textAboutUs'>
          <p>
            A iniciativa [nome do projeto] surgiu para incentivar as pessoas a esse ato de solidariedade e amor ao próximo por meio de parcerias com empresas e organizações. 
          </p>
          <p>
            Para aproveitar é muito simples, você só precisa: 
            <ul>
              <li>
                <span>Se cadastrar no nosso site,</span> aceitando os termos de uso. 
              </li>
              <li>
                <span>Doar sangue e cadastrar o comprovante de doação.</span>
              </li>
              <li>
                <span>Aproveitar os descontos e brindes disponibilizados por mais de X empresas</span> em diversos setores.
              </li>
            </ul>
            <strong>Quer saber mais?</strong> Se cadastre no site e nos acompanhe nas redes sociais: 
            
              <div className='iconsContainer'>
                <Button variant='secondary'>
                <BsFacebook /> 
                </Button>

                <Button variant='secondary'>
                <BsInstagram /> <a href="https://www.instagram.com/projetohemoterapia1/"></a>
                </Button>

                <Button variant='secondary'>
                <BsYoutube />
                </Button>
              </div>
          </p>
        </div>
      </div>
      <div className='aboutusRightContainer'>
        <div className='aboutusImage'>
          <img src={TeamImage} alt='' />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
