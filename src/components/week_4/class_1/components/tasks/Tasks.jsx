import React from 'react'
import { TaskContainer, TaskCard, Button, Form, TextField } from "./TaskStyle";

const Tasks = ({ tareasTotales, handleClick }) => (
  <TaskContainer>
    {tareasTotales.map(tarea => (
    <TaskCard key={tarea.id}>
      <p>{tarea.task}</p>
      <Button onClick={() => handleClick(tarea)}>{tarea.isFinished ? "Hecho" : "Pendiente"}</Button>
    </TaskCard>))}
  </TaskContainer>
)

export default Tasks