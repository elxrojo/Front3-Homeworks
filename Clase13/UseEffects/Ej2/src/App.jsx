import { useState } from 'react'
import './App.css'
import ComponenteActivo from './Components/ComponenteActivo.jsx'


function App() {
  const [isActive, setIsActive] = useState(false)
  const botonText = () => isActive? setIsActive(false) : setIsActive(true)


  return (
    <>
      <button onClick={botonText}>
        { isActive? 'Desactivar' : "Activar" }
      </button>
      {isActive && <ComponenteActivo/>}
    </>
  )
}

export default App