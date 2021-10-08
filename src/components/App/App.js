import ToDoList from 'components/page/ToDoList';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          
          <ToDoList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
