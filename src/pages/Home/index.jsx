import React from 'react';
import './styles.scss';
import WithLove from '../../assets/images/with-love.svg';

const Home = () => {
  return (
    <div className='homeWrapper'>
      <div className='homeTitleContainer'>
        <div className='homeTitle'>
          <span>Projeto</span>
          <strong>Banco</strong>
        </div>
        <p>
          Mussum Ipsum, Suco de cevadiss deixa as pessoas mais interessantis.
          Cevadis im ampola pa arma uma pindureta.
        </p>
      </div>
      <div className='homeImage'>
        <img src={WithLove} alt='' />
      </div>
    </div>
  );
};

export default Home;
