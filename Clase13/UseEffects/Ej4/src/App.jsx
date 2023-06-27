import { useState } from 'react'
import './App.css'
import Pedido from './Components/pedido'

function App() {
  const [inProgress, setInProgress] = useState(false)

  function buttonHandler() {
    setInProgress(false)
  }

  return (
    <>
      {inProgress ? undefined : <button onClick={()=> setInProgress(!inProgress)}>Pedir</button> }
      {inProgress && <Pedido cancelar={()=>buttonHandler}/> }
    </>
  )
}

export default App
