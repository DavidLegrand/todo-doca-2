
import FormSection from "components/shared/FormSection";
import Title from "components/shared/Title";
import { UserContext } from "contexts/User";
import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router";

const Login = () => {
  const [user, setUser] = useContext(UserContext)
  const [form, setForm] = useState({ login: '', password: '' })

  const handleLogin = e => {
    e.preventDefault()
    if(form.login){
      setUser({ ...user, id: +form.login, isLogged: true })
    }
  }

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  return (
    !user.isLogged ?
      <>
        <Title>Se connecter</Title>
        <Form onSubmit={handleLogin}>
          <FormSection label='User ID' type='number' name='login' value={form.login} onChange={handleChange} />
          <FormSection label='Password' type='password' name='password' value={form.password} onChange={handleChange} />

          <Form.Group className="mb-3" >
            <Button type="submit">Se connecter</Button>
          </Form.Group>
        </Form>
      </>
      :
      <Redirect to='/tasks' />
  )
};

export default Login;
