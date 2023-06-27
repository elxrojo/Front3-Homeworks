import { useState } from 'react'
import './App.css'
import Componentex from './Components/Componente'

function App() {
  const [inpu, setInpu] = useState('')
  const [submittedValue, setSubmittedValue] = useState('')


  return (
    <>
      <label>Nombre</label>
      <input type="text" value={inpu} onChange={()=>setInpu(event.target.value)}/>
      <button onClick={()=>setSubmittedValue(inpu)}>asd</button>
      <Componentex valueInput={submittedValue}/>

    </>
  )
}

export default App
