import Home from 'components/page/Home'
import NotFound from 'components/page/NotFound'
import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router'
import Login from 'components/page/Login'
import LoggedRoute from './LoggedRoute'
import Loading from 'components/shared/Loading'

import TaskDetails from 'components/page/TaskDetails'

import NewTaskForm from 'components/page/NewTaskForm'
import ToDoList from 'components/page/ToDoList'

const Routes = () => {
  return (
   
      <Switch>
        <Route path='/' exact><Home /></Route>
        <LoggedRoute path='/tasks' exact><ToDoList /></LoggedRoute>
        <LoggedRoute path='/tasks/new' exact><NewTaskForm /></LoggedRoute>
        <LoggedRoute path='/tasks/:id'><TaskDetails /></LoggedRoute>
        <Route path='/login'><Login /></Route>
        <Route path='*'><NotFound /></Route>
      </Switch>

  )
}

export default Routes
