import React from "react";
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return <Navbar bg="dark" variant="dark" expand="lg">
    <Nav as="ul">
      <Nav.Item as="li"><NavLink to="/" className="nav-link">Accueil</NavLink></Nav.Item>
      <Nav.Item as="li"><NavLink to="/tasks" className="nav-link">Todolist</NavLink></Nav.Item>
      <Nav.Item as="li"><NavLink to="/tasks/new" className="nav-link">Nouvelle tâche</NavLink></Nav.Item>
    </Nav>
  </Navbar>;
};

export default Menu;
