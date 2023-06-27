import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [facto, setFacto] = useState('')
  const [mostrarFacto, setMostrarFacto ] = useState(false)
  
  async function traerFacto(){
    const factoFetch = (await fetch('https://cat-fact.herokuapp.com/facts/random'))
    const jsonFactoFetch = await factoFetch.json()
    setFacto(jsonFactoFetch.text)


    console.log(jsonFactoFetch);
  }

  useEffect(()=>{
    traerFacto()
  },[])

  function buttonHandler(){
    traerFacto()
    setMostrarFacto(true)
  }


  return (
    <>
      <button onClick={()=>buttonHandler()}>Siguiente facto</button>
      {console.log(facto)}
      {mostrarFacto ? <h1>{facto}</h1> : undefined}
  
    </>
  )
}

export default App
