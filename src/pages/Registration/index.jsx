import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsChevronLeft, BsChevronRight, BsCheck } from 'react-icons/bs';

import InputMask from 'react-input-mask';

import './styles.scss';

const Registration = () => {
  const [stage, setStage] = useState(1);
  const [name, setName] = useState();
  const [birthDate, setBirthDate] = useState();
  const [email, setEmail] = useState();
  const [tel, setTel] = useState();
  const [weight, setWeight] = useState();
  const [pregnancy, setPregnancy] = useState(false);
  const [breastfeeding, setBreastfeeding] = useState();
  const [
    breastfeedingForMoreThan12Months,
    setBreastfeedingForMoreThan12Months,
  ] = useState(true);
  const [gender, setGender] = useState();
  const [modalVisible, setmodalVisible] = useState(false);
  const [messages, setMessages] = useState([]);

  const getAge = () =>
    Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);

  const send = () => {
    setMessages([]);
    if (getAge() < 16 || getAge() > 69) {
      setMessages((oldValue) => [
        ...oldValue,
        'Idade inferior a 16 anos ou superior a 69 anos',
      ]);
    }

    if (weight < 50) {
      setMessages((oldValue) => [...oldValue, 'Peso inferior a 50 quilos']);
    }

    if (pregnancy) {
      setMessages((oldValue) => [...oldValue, 'Está grávida']);
    }

    if (!breastfeedingForMoreThan12Months) {
      setMessages((oldValue) => [
        ...oldValue,
        'Deu a luz há menos de 12 meses',
      ]);
    }
    setmodalVisible(true);
  };

  return (
    <div className='wrapper'>
      <>
        <Modal show={modalVisible}>
          <Modal.Header closeButton>
            <Modal.Title>
              {!messages.length
                ? 'Parabéns! Você pode ser doador'
                : 'No momento, você não pode doar'}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {!messages.length ? (
              'Seus dados foram enviados com sucesso!'
            ) : (
              <>
                Infelizmente você não pode doar pelo(s) seguinte(s) motivo(s):
                <ul>
                  {messages.map((message) => (
                    <li>{message}</li>
                  ))}
                </ul>
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            {!messages.length ? (
              <Button variant='secondary' href='/'>
                Fechar
              </Button>
            ) : (
              <Button
                variant='secondary'
                onClick={() => {
                  setmodalVisible(false);
                }}
              >
                Fechar
              </Button>
            )}
          </Modal.Footer>
        </Modal>
        {stage === 1 ? (
          <>
            <h3 className='mt-3'>Dados pessoais</h3>
            <p> <span>Precisamos te conhecer melhor.</span> </p>
            <Form className='formDiv'>
              <Form.Group className='mb-3' controlId='formName'>
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  value={name}
                  onChange={({ target }) => {
                    setName(target.value);
                  }}
                  type='text'
                  placeholder='Seu nome completo...'
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formAge'>
                <Form.Label>Data de nascimento</Form.Label>
                <Form.Control
                  type='date'
                  value={birthDate}
                  onChange={({ target }) => {
                    setBirthDate(target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formGender'>
                <Form.Label>Sexo</Form.Label>
                <Form.Select
                  value={gender}
                  onChange={({ target }) => {
                    setGender(target.value);
                  }}
                >
                  <option>Selecione...</option>
                  <option value='Masculino'>Masculino</option>
                  <option value='Feminino'>Feminino</option>
                  <option value='Outro'>Outro</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className='mb-3' controlId='formEmail'>
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  value={email}
                  onChange={({ target }) => {
                    setEmail(target.value);
                  }}
                  type='email'
                  placeholder='Seu e-mail...'
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formTel'>
                <Form.Label>Celular</Form.Label>
                <InputMask
                  value={tel}
                  mask='(99) 9 9999-9999'
                  type='text'
                  placeholder='Seu celular...'
                  onChange={({ target }) => {
                    setTel(target.value);
                  }}
                >
                  {(inputProps) => <Form.Control {...inputProps} />}
                </InputMask>

                <Form.Text>
                  Nunca compartilharemos seu número ou e-mail com terceiros.
                </Form.Text>
              </Form.Group>
            </Form>
            <Button
              onClick={() => {
                setStage(2);
              }}
              variant='secondary'
            >
              <BsChevronRight />
            </Button>
          </>
        ) : (
          <>
            <h3>Mais uma coisinha...</h3>
            <p>
              Precisamos saber se você pode ser{' '}
              {gender === 'Feminino' ? 'doadora' : 'doador '} neste momento.
            </p>
            <Form className='formDiv'>
              <Form.Group className='mb-3' controlId='formName'>
                <Form.Label>Idade</Form.Label>
                <Form.Control value={getAge()} type='number' readOnly />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label>Peso (kg)</Form.Label>
                <Form.Control
                  value={weight}
                  onChange={({ target }) => {
                    setWeight(target.value);
                  }}
                  type='number'
                />
              </Form.Group>

              {gender === 'Feminino' && (
                <>
                  <Form.Group className='mb-3' controlId='formName'>
                    <Form.Label>Está gravida?</Form.Label>
                    <Form.Switch
                      checked={pregnancy}
                      onChange={({ target }) => {
                        setPregnancy(target.checked);
                      }}
                    />
                  </Form.Group>

                  <Form.Group className='mb-3' controlId='formName'>
                    <Form.Label>Está amamentando?</Form.Label>
                    <Form.Switch
                      checked={breastfeeding}
                      onChange={({ target }) => {
                        if (!target.checked)
                          setBreastfeedingForMoreThan12Months(true);
                        setBreastfeeding(target.checked);
                      }}
                    />
                  </Form.Group>

                  {breastfeeding && (
                    <Form.Group className='mb-3' controlId='formName'>
                      <Form.Label>
                        O parto ocorreu há mais de 12 meses?
                      </Form.Label>
                      <Form.Switch
                        checked={breastfeedingForMoreThan12Months}
                        onChange={({ target }) => {
                          setBreastfeedingForMoreThan12Months(target.checked);
                        }}
                      />
                    </Form.Group>
                  )}
                </>
              )}
            </Form>
            <div className='formButtons'>
              <Button
                onClick={() => {
                  setStage(1);
                }}
                variant='secondary'
              >
                <BsChevronLeft />
              </Button>
              <Button
                className='ms-3'
                onClick={() => {
                  send();
                }}
                variant='secondary'
              >
                Enviar <BsCheck />
              </Button>
            </div>
          </>
        )}
      </>
    </div>
  );
};

export default Registration;
