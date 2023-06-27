import { useEffect, useState } from 'react'
import './App.css'
import Card from './Components/Card'
import { Route, Routes } from 'react-router-dom'
import CardDetails from './Components/CardDetails'

function App() {
  const [datosCards, setDatosCards] = useState([])

  async function fetchData() {
    const datos = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json()
    setDatosCards(datos)
    console.log(datos);
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <>
    <Routes>
      <Route path='/posts/:id' element={<CardDetails/>}/>
    </Routes>
      <Card infos={datosCards}/>
    </>
  )
}

export default App
