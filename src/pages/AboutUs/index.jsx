import React from 'react';
import Logo from '../../assets/images/logo.svg';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
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
            <strong>O Projeto Elo</strong> surgiu para incentivar as pessoas a esse ato de solidariedade e amor ao próximo por meio de <span>parcerias com empresas e organizações.</span>
          </p>
          <p>
            Para aproveitar é muito simples, você só precisa:
            <ul>
              <li>
                <span>Se cadastrar no nosso site,</span> aceitando os termos de uso.
              </li>
              <li>
                <span>Doar sangue e cadastrar o comprovante.</span>
              </li>
              <li>
                <span>
                  Aproveitar os descontos e brindes disponibilizados por mais de X empresas </span>{' '} em diversos setores.
              </li>
            </ul>
            <strong>Quer saber mais?</strong> Se cadastre no site e nos
            acompanhe nas redes sociais:
          </p>
        </div>
        <div className='iconsContainerAboutUs'>
          <Button variant='secondary' href='https://www.facebook.com/people/Projeto-Elo/100087533004394/'>
            <BsFacebook />
          </Button>

          <Button variant='secondary' href='https://www.instagram.com/projetoelo_/'>
            <BsInstagram />
          </Button>

        </div>
      </div>
      <div className='aboutusRightContainer'>
        <div className='aboutusImage'>
          <img src={Logo} alt='' />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
