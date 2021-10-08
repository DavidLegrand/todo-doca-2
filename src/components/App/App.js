import ToDoList from 'components/page/ToDoList';
import Menu from 'components/shared/Menu';
import { Col, Container, Row } from 'react-bootstrap';
import Routes from 'routes';
import './App.css';

function App() {
  return (
    <>
      <Menu />
      <Container>
        <Row>
          <Col>
            <Routes />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
