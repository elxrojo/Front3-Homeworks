import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import FactosList from './Components/FactosList'



function App() {
  const [buscando, setBuscando] = useState(false)
  const [factos, setFactos] = useState([])

  async function buscarFacts(){
    setBuscando(true)
    const facts = await fetch('https://cat-fact.herokuapp.com/facts')
    const jsonFacts = await facts.json()
    let factsFiltered  = await jsonFacts.map((fact) => { return {_id: fact._id, text: fact.text} })
    setFactos(factsFiltered)    
  }
  
  useEffect(()=>{
    setBuscando(false)
  }, [factos])

  return (
    <>
      <button onClick={()=>buscarFacts()}>Buscar Datos</button>
      {buscando ? <h3>Buscando...</h3> : undefined }
      {factos.length > 1 ? <FactosList infoFactos={factos}/> : undefined}
    </>
  )
}

export default App
