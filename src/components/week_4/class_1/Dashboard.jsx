import React, { useState } from 'react'
import Header from './components/header/Header'
import Tasks from './components/tasks/Tasks';
import { data } from "./db";
import { TaskContainer, Button, Form, TextField, ErrorMessageLabel } from "./components/tasks/TaskStyle";
const REGEX_STRING = "^[A-Za-z] *";

const arrayTareasPendientes = data.filter(tarea => tarea.isFinished === false);
const arrayTareasTerminadas = data.filter(tarea => tarea.isFinished === true);

const Dashboard = () => {

  const [tareasTotales, setTareasTotales] = useState(data)
  const [tareasPendientes, setTareasPendientes] = useState(arrayTareasPendientes)
  const [tareasTerminadas, setTareasTerminadas] = useState(arrayTareasTerminadas)

  const handleClick = (tareaClickeada) => {
    const tareaSeleccionada = tareasTotales.map(tarea => tarea.id === tareaClickeada.id ? {...tarea, isFinished: !tarea.isFinished} : tarea)
    setTareasTotales(tareaSeleccionada)
    const tPendientes = tareaSeleccionada.filter(tarea => tarea.isFinished === false)
    setTareasPendientes(tPendientes)
    const tTerminadas = tareaSeleccionada.filter(tarea => tarea.isFinished === true)
    setTareasTerminadas(tTerminadas)
  }

  return (
    <div>
      <Header tareasTotales={tareasTotales} tareasPendientes={tareasPendientes} tareasTerminadas={tareasTerminadas}/>
      <Tasks tareasTotales={tareasTotales} handleClick={handleClick}/>
    </div>
  )
}

export default Dashboard