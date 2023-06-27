import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Posts from './Components/Posts'

let contador = 101

function App() {
  const [posts, setPosts] = useState([])
  // const [errores, setErrores] = useState([])
  // const [cargando, setCargando] = useState('')

  const [titulo, setTitulo] = useState('')
  const [body, setBody] = useState('')
  
  async function fetchingPost(){
    const envioPedido = await (fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: titulo,
        body: body,  
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }))
    console.log(envioPedido);
    setPosts([{userId: 1, id: contador++ ,title: titulo, body: body}, ...posts]);
  }

  async function fetchingGet(){
    const pedido = await (fetch('https://jsonplaceholder.typicode.com/posts'))
    const jsonpedido = await pedido.json()
    setPosts(jsonpedido)

  }

  useEffect(() => {
    fetchingGet()
  },[])

  return (
    <>
      <form onSubmit={(e)=> e.preventDefault()}>
        <label>Titulo</label>
        <input type="text" value={titulo} onChange={(e)=> setTitulo(e.target.value)}/>

        <label>Body</label>
        <textarea value={body} onChange={(e)=> setBody(e.target.value)}></textarea>

        <button onClick={()=> fetchingPost()}>Guardar</button>
      </form>

      <Posts infoPosts={posts}/>
    </>
  )
}

export default App
