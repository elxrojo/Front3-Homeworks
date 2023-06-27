// import { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import TasksList from './Components/TasksList'
import ListProvider from './Contexts/ContextList'

function App() {
  return(
    <ListProvider>
      <Form/>
      <TasksList/>
    </ListProvider>
  )
}

export default App
