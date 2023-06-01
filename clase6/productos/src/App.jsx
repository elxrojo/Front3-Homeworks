import productos from './data/productos.json'
import './App.css'
import usuarios from './data/usuarios.json'
import userypets from './data/usuariosymascotas.json'
import { ProductCard } from './Components/ProductCard'

function App() {
  function handlerAddToCart(id){
    console.log("Se agrego el producto " + id)
  }

  return (
    <>            
        <h1>Productos</h1>
        <ul className='container'>
            {productos.map(p => {
                return (
                  <ProductCard key={p.id} onAddToCart={handlerAddToCart} producto={p}/>
                )
            })}
        </ul>

        <h1>Usuarios</h1>
        <ul className='container usuarios'>
            {usuarios.map(usuario => {
                  return <li key={usuario.account}> <a href={`https://twitter.com/${usuario.account}`}>{usuario.userName}</a></li>                     
            })}
        </ul>
        
        <h1>Usuarios y mascotas</h1>
        <ul className='container uyp'>
            {
          userypets.map(uyp => {
            return(<li key={uyp.email}>
                    <h2>Mascota/s de {uyp.apodo}</h2>
                    {uyp.mascotas.map((mascota,i) =>{
                        return <div key={i}>{mascota.nombre} {mascota.edad} {mascota.color}</div>
                    })}
                    </li>)
                })
            }
        </ul>
    </>
  )
}

export default App
