import { API_URL } from "api";
import NewTaskForm from "components/NewTaskForm";
import Task from "components/Task";
import TaskModel from "models/Task";
import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";

const initialList = [
  { id: 1, title: "Préparer la réunion client", completed: false, priority: "Haute", description: "Faut faire vite, c'est urgent" },
  { id: 2, title: "Valider le prochain sprint", completed: false, priority: "Moyenne", description: "Idéalement rajouter la task #42 dans le sprint" },
  { id: 3, title: "Commencer l'intégration", completed: false, priority: "Basse", description: "Les maquettes ont déjà été validées" },
]

const ToDoList = () => {
  const [list, setList] = useState(initialList)
  const updateCompleted = (completed, task = null) => {
    setList((list) => list.map((t) => (!task || t.id === task?.id) ? { ...t, completed } : t))
  }

  // useEffect(() => {
  //   effect
  // }, [input])

  const addTask = (task) => {
    setList((list) => [...list, { ...task, id: getNewId() }])
  }

  const getNewId = () => list.reduce((prev, curr) => curr.id > prev.id ? curr : prev).id + 1

  return <>
    <ListGroup>
      {list.map((task) => <Task
        key={task.id}
        task={new TaskModel(task)}
        updateCompleted={updateCompleted}
      />)}
      <ListGroupItem>
        <Button variant="dark" className="me-3" onClick={() => updateCompleted(true)}>Terminer tout</Button>
        <Button variant="dark" onClick={() => updateCompleted(false)}>Annuler tout</Button>
      </ListGroupItem>
    </ListGroup>
    <NewTaskForm addTask={addTask} />
  </>;
};

export default ToDoList;
