import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Inicio from './Routes/Inicio.jsx'
import Short from './Routes/Shorts.jsx'
import Suscripciones from './Routes/Suscripciones.jsx'
import Explorar from './Explorar.jsx'

function App() {
  return (
    <>

      <nav>
        <Link to='/'> Inicio </Link>
        <Link to='/shorts'> Shorts </Link>
        <Link to='/suscripciones'> Suscripciones </Link>
        <Link to='/explorar'> Explorar </Link>
      </nav>


      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/shorts' element={<Short/>}/>
        <Route path='/suscripciones' element={<Suscripciones/>}/>
        <Route path='/explorar/*' element={<Explorar/>}/>
        <Route path='*' element={<div>404</div>}/>
      </Routes>
    </>
  )
}

export default App
