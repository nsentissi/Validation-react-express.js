import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import TaskList from './components/TaskList'
import TaskCreate from './components/TaskCreate'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/tasks'  Component={TaskList}  />
        <Route path='/tasks/create'  Component={TaskCreate}/>
      </Routes>
    </>
  )
}

export default App
