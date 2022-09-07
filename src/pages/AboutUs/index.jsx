import React from 'react';
import TeamImage from '../../assets/images/team.svg';
import './styles.scss';

const AboutUs = () => {
  return (
    <div className='aboutusWrapper'>
      <div className='aboutusLeftContainer'>
        <div className='aboutusTitleContainer'>
          <div className='aboutusTitle'>
            <span>Sobre</span>
            <strong>Nós</strong>
          </div>
        </div>

        <div className='textAboutUs'>
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz
            malandris se pirulitá.A ordem dos tratores não altera o pão
            duris.Copo furadis é disculpa de bebadis, arcu quam euismod
            magna.Praesent malesuada urna nisi, quis volutpat erat hendrerit
            non. Nam vulputate dapibus.
          </p>
          <p>
            Diuretics paradis num copo é motivis de denguis.Paisis, filhis,
            espiritis santis.Quem manda na minha terra sou euzis!Delegadis gente
            finis, bibendum egestas augue arcu ut est.
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
