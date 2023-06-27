import { useState } from 'react'
import './App.css'
import { NumberCards } from './Components/NumberCards'
let autoId = 0

function App() {
  const [users, setUsers] = useState([])
  const [nombre, setNombre] = useState('')
  const [numero, setNumero] = useState('')
  const [error, setError] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    if(!nombre){
      setError('Debe ingresar un nombre')
    } else if (!numero){
      setError('Debe ingresar un numero')
    } else {
      setError('')
      setUsers([...users, { id: autoId++, name: nombre, number: numero}])
    }
  }

  const handleName = (e) => {
    setNombre(e.target.value)
  }

  const handleNumber = (e) => {
    setNumero(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Tu nombre:</label>
          <input type='Text' id='name' placeholder='Ingrese su nombre' value={nombre} onChange={handleName}/>
        </div>
        <div>
          <label htmlFor="number">Tu numero favorito</label>
          <input type='number' id='number' placeholder='Ingrese el numero' value={numero} onChange={handleNumber}/>
        </div>
      {error && <div>{error}</div>}

        <button type='submit'>Enviar</button>
      </form>
      <NumberCards infoCards={users}/>
    </>
  )
}

export default App
