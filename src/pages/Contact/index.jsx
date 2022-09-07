import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PartnersImage from '../../assets/images/conversation.svg';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import './styles.scss';

const Contact = () => {
  return (
    <div className='contactWrapper'>
      <div className='contactLeftContainer'>
        <div className='contactTitleContainer'>
          <div className='contactTitle'>
            <span>Con</span>
            <strong>tato</strong>
          </div>
          <p>
            Mussum Ipsum, Suco de cevadiss deixa as pessoas mais interessantis.
          </p>
        </div>
        <div className='iconsContainer'>
          <Button variant='secondary'>
            <BsFacebook />
          </Button>

          <Button variant='secondary'>
            <BsInstagram />
          </Button>

          <Button variant='secondary'>
            <BsTwitter />
          </Button>
        </div>

        <Form className='contactForm'>
          <Form.Group className='mb-3'>
            <Form.Label>Seu e-mail</Form.Label>
            <Form.Control type='email' placeholder='E-mail' />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Sua mensagem</Form.Label>
            <Form.Control as='textarea' placeholder='Mensagem' />
          </Form.Group>
          <Button variant='secondary' type='submit'>
            Enviar
          </Button>
        </Form>
      </div>
      <div className='contactRightContainer'>
        <div className='contactImage'>
          <img src={PartnersImage} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Contact;
