

import TaskModel from "models/Task";
import PropTypes from "prop-types";
import React, { } from "react";
import { Badge, ListGroupItem, Button, Table } from "react-bootstrap";
import Line from "components/shared/Line";

const Task = ({ task, updateCompleted }) => {

  return <ListGroupItem variant={task.getVariant()}>
    <h2>{task.title}</h2>
    <Badge
      bg={task.getVariant()}
      text={task.getVariant() === 'light' || task.getVariant() === 'warning' ? 'dark' : ''}>
      {task.getStatus()}
    </Badge>
    <Table size="sm">
      <tbody>
        <Line data={task.created} datatype='date' label='Créée le' />
        <Line data={task.deadline} datatype='date' label='Deadline' />
        <Line data={task.getRemaining()} datatype='string' label='Temps restant' />
        <Line data={task.description} datatype='string' label='Description' />
      </tbody>
    </Table>

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
