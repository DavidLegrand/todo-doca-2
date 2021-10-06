import ToDoList from 'components/ToDoList';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="display-4 text-center">To Do List</h1>
          <ToDoList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
