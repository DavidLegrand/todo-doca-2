import FormSection from "components/shared/FormSection";
import { UserContext } from "contexts/User";
import TaskModel from "models/Task";
import React, { useState, useContext } from "react";
import { Form, FormGroup, Button } from 'react-bootstrap'
import Title from 'components/shared/Title'

const NewTaskForm = ({ addTask }) => {
  const [user] = useContext(UserContext)
  const init = new TaskModel()
  const [newTask, setNewTask] = useState(init)

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    const name = e.target.name
    setNewTask(new TaskModel({ ...newTask, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask({ ...newTask, createdBy: user.id, assignedTo: user.id })
    setNewTask(init)
  }

  return <>
    <Title>Nouvelle tâche</Title>
    <Form onSubmit={handleSubmit}>
      <FormSection
        label='Titre'
        name='title'
        value={newTask.title}
        onChange={handleChange} />
      <FormSection label='Description' name='description' value={newTask.description} onChange={handleChange} as="textarea"></FormSection>
      <FormSection label='Statut' name='completed' checked={newTask.completed} checkboxlabel={newTask.getCompleted()} onChange={handleChange} as="checkbox"></FormSection>
      <FormSection label='Priorité' name='priority' value={newTask.priority} onChange={handleChange} as="select" options={['Basse', 'Moyenne', 'Haute']} />
      <FormGroup className="mb-3">
        <Button variant="success" type="submit">Enregistrer</Button>
      </FormGroup>
    </Form>
  </>;
};

export default React.memo(NewTaskForm)
