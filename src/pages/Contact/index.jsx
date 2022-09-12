import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ContactImage from '../../assets/images/contact.svg';
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import './styles.scss';

const Contact = () => {
  return (
    <div className='contactWrapper'>
      <div className='contactLeftContainer'>
        <div className='contactTitleContainer'>
          <div className='contactTitle'>
            <span>Con</span>
            <strong>tatos</strong>
          </div>
            <p>
            <strong>Quer saber mais? </strong> Nos acompanhe nas <span>redes sociais</span> e <span>mande sua mensagem</span>           
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
            <BsYoutube />
          </Button>
        </div>

        <Form className='contactForm'>
          <Form.Group className='mb-3'>
            <Form.Label>Seu e-mail</Form.Label>
            <Form.Control type='email' placeholder='Digite seu e-mail' />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Sua mensagem</Form.Label>
            <Form.Control as='textarea' placeholder='Digite sua mensagem' />
          </Form.Group>
          <Button variant='secondary' type='submit'>
            Enviar
          </Button>
        </Form>
      </div>
      <div className='contactRightContainer'>
        <div className='contactImage'>
          <img src={ContactImage} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Contact;
