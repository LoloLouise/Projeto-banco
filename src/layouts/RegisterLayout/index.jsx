import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import AppNavbar from '../../components/NavBar';
import Registration from '../../pages/Registration';
import './styles.scss';

const RegisterLayout = () => (
  <Container fluid>
    <Row className='navbar'>
      <Col>
        <AppNavbar />
      </Col>
    </Row>

    <Row className='registration'>
      <Col>
        <Registration />
      </Col>
    </Row>
  </Container>
);

export default RegisterLayout;
