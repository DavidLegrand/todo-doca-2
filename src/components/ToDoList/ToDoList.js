import Task from "components/Task";
import TaskModel from "models/Task";
import React from "react";
import { ListGroup } from "react-bootstrap";

const ToDoList = () => {

  const list = [
    { id: 1, title: "Préparer la réunion client", completed: false, priority: "Haute", description: "Faut faire vite, c'est urgent" },
    { id: 2, title: "Valider le prochain sprint", completed: false, priority: "Moyuenne", description: "Idéalement rajouter la task #42 dans le sprint" },
    { id: 3, title: "Commencer l'intégration", completed: false, priority: "Basse", description: "Les maquettes ont déjà été validées" },
  ]

  const updateCompleted = (completed, task) => {
    console.log(completed, task)
  }

  return <ListGroup>
    {list.map((task) => <Task
      key={task.id}
      task={new TaskModel(task)}
      updateCompleted={updateCompleted}
    />)}
  </ListGroup>;
};

export default ToDoList;
