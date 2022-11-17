import React from 'react';
import './styles.scss';
import WithLove from '../../assets/images/with-love.svg';
import { Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div className='homeWrapper'>
      <div className='homeTitleContainer'>
        <div className='homeTitle'>
          <span>A</span> <strong>Doação</strong>
        </div>
        <p>
          É o gesto <strong>altruísta e voluntário</strong> de doar uma{' '}
          <span>pequena quantidade</span> do próprio sangue{' '}
          <span>para salvar vidas.</span> Uma <strong>única doação</strong> pode
          salvar até <strong>4 pessoas</strong>.
        </p>
        <p>
          Todos os anos, <span>milhares de pessoas</span> precisam receber
          doações de sangue. Além das{' '}
          <strong>
            pessoas que sofrem acidentes graves e as que precisam passar por
            certos tratamentos, cirugias e transplantes
          </strong>
          , muitas <strong>pessoas com algumas doenças crônicas</strong> também
          precisam de doações.{' '}
          <span>
            Existem muitas mais pessoas necessitando de doações de sangue do que
            nós imaginamos.
          </span>
        </p>
        <p>
          Mas, no Brasil de hoje,{' '}
          <strong>só 1,8% da população doa sangue.</strong>{' '}
          <span>
            Em muitos estados brasileiros os estoques de sangue estão em níveis
            críticos.
          </span>{' '}
          Corremos o <strong>risco de não ter sangue disponível</strong> em
          alguns estados <span>para pessoas que necessitam.</span>
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
