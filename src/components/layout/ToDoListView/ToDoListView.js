import React, { useContext } from "react";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
import Title from "components/shared/Title";
import Loading from "components/shared/Loading";
import NewTaskForm from "components/page/NewTaskForm";
import Task from "components/layout/Task";
import TaskModel from "models/Task";
import { UserContext } from "contexts/User";

const ToDoListView = ({ list, error, loading, addTask, updateCompleted }) => {

  const [user, setUser] = useContext(UserContext)

  return <><Title>To Do List</Title>
    User ID: <input type="number" value={user.id} onChange={(e) => setUser({ ...user, id: +e.target.value })} />
    <ListGroup>
      <Loading loading={loading} />
      {!loading && !error && list
        .filter((task) => task.assignedTo === user.id || task.createdBy === user.id)
        .map((task) => <Task
          key={task.id}
          task={new TaskModel(task)}
          updateCompleted={updateCompleted}
        />)}
      <ListGroupItem>
        <Button variant="dark" className="me-3" onClick={() => updateCompleted(true)}>Terminer tout</Button>
        <Button variant="dark" onClick={() => updateCompleted(false)}>Annuler tout</Button>
      </ListGroupItem>
    </ListGroup>
  </>;
};

export default ToDoListView;
