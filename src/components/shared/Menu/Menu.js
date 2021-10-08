import { UserContext } from "contexts/User";
import React, { useContext } from "react";
import { Navbar, Nav, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  const [user, setUser] = useContext(UserContext)

  return <Navbar bg="dark" variant="dark" expand="lg">
    <Nav as="ul" className='me-auto'>
      <Nav.Item as="li"><NavLink to="/" className="nav-link">Accueil</NavLink></Nav.Item>

      {user.isLogged ?
        <>
          <Nav.Item as="li"><NavLink to="/tasks" className="nav-link">Todolist</NavLink></Nav.Item>
          <Nav.Item as="li"><NavLink to="/tasks/new" className="nav-link">Nouvelle tâche</NavLink></Nav.Item>
        </>
        :
        <>
          <Nav.Item as="li"><NavLink to="/login" className="nav-link">Login</NavLink></Nav.Item>
        </>
      }

    </Nav>
    {user.isLogged &&
      <Nav>
        <Button variant='danger' onClick={() => setUser({ ...user, isLogged: false })}>Déconnection</Button>
      </Nav>
    }
  </Navbar>;
};

export default Menu;
