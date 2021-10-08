import Home from 'components/page/Home'
import NewTaskForm from 'components/page/NewTaskForm'
import TaskDetails from 'components/page/TaskDetails'
import ToDoList from 'components/page/ToDoList'
import React from 'react'
import { Route, Switch } from 'react-router'



const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact><Home /></Route>
      <Route path='/tasks' exact><ToDoList /></Route>
      <Route path='/tasks/new' exact><NewTaskForm /></Route>
      <Route path='/tasks/:id'><TaskDetails /></Route>
    </Switch>
  )
}

export default Routes
