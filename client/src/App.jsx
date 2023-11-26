import './App.css'
import {Routes, Route} from 'react-router-dom'
import TaskList from './components/TaskList'
import TaskCreate from './components/TaskCreate'
import { useState } from 'react'


function App() {
const [tasks, setTasks] = useState([])

  return (
    <>
      <Routes>
        <Route path='/tasks'  element={<TaskList tasks={tasks} setTasks={setTasks}/>}  />
        <Route path='/tasks/create'  element={<TaskCreate tasks={tasks} setTasks={setTasks} />}/>
      </Routes>
    </>
  )
}

export default App
