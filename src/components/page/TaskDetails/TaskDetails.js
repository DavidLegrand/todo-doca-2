import { API_URL } from "api";
import Loading from "components/shared/Loading";
import Line from "components/shared/Line";
import Title from "components/shared/Title";
import NotFound from "components/page/NotFound";
import useFetch from "hooks/UseFetch";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Table } from 'react-bootstrap'
import TaskModel from "models/Task";
import { Link } from "react-router-dom";


const TaskDetails = () => {
  const { id } = useParams()
  const [task, settask] = useState(null)

  const { data, error, loading } = useFetch(`${API_URL}tasks/${id}.json`)

  useEffect(() => {
    if (data)
      settask(new TaskModel(data))
  }, [data])

  return <>
    <Loading loading={loading} />
    {!loading &&
      <>
        {!error && task ?
          <>
            <Title>{task.title}</Title>
            <Table size="sm">
              <tbody>
                <Line data={task.priority} label='Priorité' />
                <Line data={task.created} label='Créée le' datatype='date' />
                <Line data={task.deadline} label='Deadline' datatype='date' />
                <Line data={task.getRemaining()} label='Temps restant' />
                <Line data={task.description} label='Description' />
                <Line data={task.assignedTo} label='Assignée à' />
                <Line data={task.createdBy} label='Créée par' />
              </tbody>
            </Table>
            <Link to='/tasks'>Retour à la liste</Link>
          </>
          :
          <NotFound />
        }
      </>
    }
  </>;
};

export default TaskDetails;
