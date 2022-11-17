import React from 'react';
import './styles.scss';
import WithLove from '../../assets/images/with-love.svg';
import { Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div className='homeWrapper'>
      <div className='homeTitleContainer'>
        <div className='homeTitle'>
          <span>A</span> <strong>Doação de Sangue</strong>
        </div>
        <p>
          É o gesto <strong>altruísta, voluntário e solidário</strong> de doar uma{' '}
          <span>pequena quantidade</span> do próprio sangue{' '}
          <span>para salvar vidas.</span> Uma <strong>única doação</strong> pode
          salvar até <strong>4 pessoas</strong>.
        </p>
        <p>
          Todos os anos, <span>milhares de pessoas</span> precisam receber
          doações de sangue. Desde as{' '}
          <strong>
            pessoas que sofreram acidentes graves, ou que precisaram passar por
            certos tratamentos, cirugias e transplantes
          </strong>
          , até <strong>pessoas com doenças crônicas</strong>.{' '}
          <span>
            Existem mais pessoas necessitando de doações de sangue do que
            nós imaginamos.
          </span>
        </p>
        <p>
          Mas, no Brasil de hoje,{' '}
          <strong>só 1,8% da população doa sangue.</strong>{' '}
          <span>
            Em muitos estados brasileiros, os estoques de sangue estão em níveis
            críticos.
          </span>{' '}
          Corremos o <strong>risco de não ter sangue disponível</strong> em
          alguns deles <span>para as pessoas que precisam.</span>
        </p>
        <p>
          Mas <strong>você</strong> pode nos ajudar a{' '}
          <strong>virar o jogo.</strong>{' '}
          <span>Continue lendo para saber como.</span>
        </p>
        <Button
          className='register-button'
          variant='secondary'
          href='/cadastro'
        >
          Cadastre-se
        </Button>
      </div>

      <div className='homeImage'>
        <img src={WithLove} alt='' />
      </div>
    </div>
  );
};

export default Home;
