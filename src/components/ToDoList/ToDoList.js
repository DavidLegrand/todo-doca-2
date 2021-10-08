import { API_URL } from "api";
import Loading from "components/Loading";
import NewTaskForm from "components/NewTaskForm";
import Task from "components/Task";
import { ListContext } from "contexts/List";
import { UserContext } from "contexts/User";
import useFetch from "hooks/UseFetch";
import usePut from "hooks/UsePut";
import TaskModel from "models/Task";
import React, { useEffect, useContext } from "react";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";

// const initialList = [
//   new TaskModel({ id: 1, title: "Préparer la réunion client", completed: false, priority: "Haute", description: "Faut faire vite, c'est urgent" }),
//   new TaskModel({ id: 2, title: "Valider le prochain sprint", completed: false, priority: "Moyenne", description: "Idéalement rajouter la task #42 dans le sprint" }),
//   new TaskModel({ id: 3, title: "Commencer l'intégration", completed: false, priority: "Basse", description: "Les maquettes ont déjà été validées" }),
// ]

const ToDoList = () => {

  //Contexts
  const [user, setUser] = useContext(UserContext)
  const [list, setList] = useContext(ListContext)

  //Sending and receiving data
  const { data, error, loading } = useFetch(`${API_URL}tasks.json`)
  usePut(`${API_URL}tasks.json`, list)

  useEffect(() => {
    setList(data)
  }, [data, setList])

  // Business logic
  const updateCompleted = (completed, task = null) => {
    setList((list) => list.map((t) => (!task || t.id === task?.id) ? { ...t, completed } : t))
  }
  
  const addTask = (task) => {
    setList((list) => [...list, { ...task, id: getNewId() }])
  }
  const getNewId = () => list.reduce((prev, curr) => curr.id > prev.id ? curr : prev).id + 1

  return <>
    User ID : <input type="number" value={user.id} onChange={(e) => setUser({ ...user, id: +e.target.value })} />
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
    <NewTaskForm addTask={addTask} />
  </>;
};

export default ToDoList;
