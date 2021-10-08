import { API_URL } from "api";

import { ListContext } from "contexts/List";
import useFetch from "hooks/UseFetch";
import usePut from "hooks/UsePut";
import React, { useEffect, useContext } from "react";

import ToDoListView from "components/layout/ToDoListView";

// const initialList = [
//   new TaskModel({ id: 1, title: "Préparer la réunion client", completed: false, priority: "Haute", description: "Faut faire vite, c'est urgent" }),
//   new TaskModel({ id: 2, title: "Valider le prochain sprint", completed: false, priority: "Moyenne", description: "Idéalement rajouter la task #42 dans le sprint" }),
//   new TaskModel({ id: 3, title: "Commencer l'intégration", completed: false, priority: "Basse", description: "Les maquettes ont déjà été validées" }),
// ]

const ToDoList = () => {

  //Contexts
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

  return <ToDoListView list={list} error={error} loading={loading} updateCompleted={updateCompleted} addTask={addTask} />;
};

export default ToDoList;
