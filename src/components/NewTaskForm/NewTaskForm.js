import TaskModel from "models/Task";
import React, { useState } from "react";
import { Form, FormGroup, FormLabel, FormControl, FormCheck, Button } from 'react-bootstrap'

const NewTaskForm = ({ addTask }) => {
  const init = new TaskModel()
  const [newTask, setNewTask] = useState(init)

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    const name = e.target.name
    setNewTask(new TaskModel({ ...newTask, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(newTask)
    setNewTask(init)
  }

  return <Form onSubmit={handleSubmit}>
    <FormGroup className="mb-3">
      <FormLabel>Titre</FormLabel>
      <FormControl name="title" value={newTask.title} onChange={handleChange} />
    </FormGroup>
    <FormGroup className="mb-3">
      <FormLabel>Description</FormLabel>
      <FormControl as="textarea" name="description" value={newTask.description} onChange={handleChange} />
    </FormGroup>
    <FormGroup className="mb-3">
      <FormLabel>Statut</FormLabel>
      <FormCheck name="completed" label={newTask.getCompleted()} checked={newTask.completed} onChange={handleChange} />
    </FormGroup>
    <FormGroup className="mb-3">
      <FormLabel>Priorité</FormLabel>
      <FormControl as="select" name="priority" value={newTask.priority} onChange={handleChange} >
        <option value="Haute">Haute</option>
        <option value="Moyenne">Moyenne</option>
        <option value="Basse">Basse</option>
      </FormControl>
    </FormGroup>
    <FormGroup className="mb-3">
      <Button variant="success" type="submit">Enregistrer</Button>
    </FormGroup>
  </Form>;
};

export default NewTaskForm;
