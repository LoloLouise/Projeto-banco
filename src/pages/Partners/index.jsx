import React from 'react';
import PartnersImage from '../../assets/images/conversation.svg';
import './styles.scss';

const Partners = () => {
  return (
    <div className='partnersWrapper'>
      <div className='partnersLeftContainer'>
        <div className='partnersTitleContainer'>
          <div className='partnersTitle'>
            <span>Nossos</span> <strong>Parceiros</strong>
          </div>
          <p>
            Conheça algumas de nossas parcerias:            
          </p>
        </div>
        <div className='partnersLogosContainer'>
          <img src={require('../../assets/images/partners/1.png')} alt='' />
          <img src={require('../../assets/images/partners/2.png')} alt='' />
          <img src={require('../../assets/images/partners/3.png')} alt='' />
          <img src={require('../../assets/images/partners/4.png')} alt='' />
          <img src={require('../../assets/images/partners/5.png')} alt='' />
          <img src={require('../../assets/images/partners/6.png')} alt='' />
          <img src={require('../../assets/images/partners/7.png')} alt='' />
          <img src={require('../../assets/images/partners/8.png')} alt='' />
        </div>
      </div>
      <div className='partnersRightContainer'>
        <div className='partnersImage'>
          <img src={PartnersImage} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Partners;
