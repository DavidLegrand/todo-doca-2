

import TaskModel from "models/Task";
import PropTypes from "prop-types";
import React, { } from "react";
import { Badge, ListGroupItem, Button } from "react-bootstrap";

const Task = ({ task, updateCompleted }) => {



  return <ListGroupItem variant={task.getVariant()}>
    <h1>{task.title}</h1>
    <Badge
      bg={task.getVariant()}
      text={task.getVariant() === 'light' || task.getVariant() === 'warning' ? 'dark' : ''}>
      {task.getStatus()}
    </Badge>
    {task.created && <p className="mb-1">Créée le : {task.created.toLocaleDateString()}</p>}
    {task.deadline && <p className="mb-1">Deadline : {task.deadline.toLocaleDateString()}</p>}
    {task.getRemaining() && <p className="mb-1">Temps restant : {task.getRemaining()} jours</p>}
    {task.description && <p className="mb-1">Description : {task.description}</p>}

    <Button
      variant="dark"
      onClick={() => updateCompleted(!task.completed, task)}>
      {task.completed ? "Annuler" : "Terminer"}
    </Button>
  </ListGroupItem>;
};

Task.propTypes = {
  task: PropTypes.instanceOf(TaskModel).isRequired,
  updateCompleted: PropTypes.func.isRequired
}

export default React.memo(Task);
