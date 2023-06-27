import { useState } from 'react'
import './App.css'

function App() {

  const [titulo, setTitulo] = useState('')
  const [contenido, setContenido] = useState('')

  async function fetchTexto() {
    const fetchPost = (
      await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: titulo,
        body: contenido,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }))
    console.log(fetchPost);
  }


  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>Titulo</label>
          <input type="text" value={titulo} onChange={e => setTitulo(e.target.value)}/>
        </div>

        <div>
          <label>Contenido</label>
          <textarea value={contenido} onChange={e => setContenido(e.target.value)}></textarea>
        </div>

        <button onClick={()=> fetchTexto()}>Guardar</button>
      </form>
    </>
  )
}

export default App
