import Menu from 'components/shared/Menu';
import { Col, Container, Row } from 'react-bootstrap';
import Routes from 'routes';
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from 'store/actions'

function Counter() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return <>
    <h1>{counter}</h1>
    <button onClick={() => dispatch(increment())}>++</button>
    <button onClick={() => dispatch(decrement())}>--</button>
    <button onClick={() => dispatch(increment(10))}>+10</button>
    <button onClick={() => dispatch(decrement(10))}>-10</button>
  </>
}

function App() {
  return (
    <>
      {/* <Counter></Counter> */}
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
