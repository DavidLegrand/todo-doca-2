import { UserContext } from 'contexts/User'
import React, { useContext, useEffect } from 'react'
import { Redirect, Route } from 'react-router'

const LoggedRoute = ({ children, path, ...otherProps }) => {

  const [user] = useContext(UserContext)
  useEffect(() => console.log(user), [user])
  return user.isLogged ? <Route to={path} {...otherProps}>{children}</Route> : <Redirect to='/login'></Redirect>
}

export default LoggedRoute
