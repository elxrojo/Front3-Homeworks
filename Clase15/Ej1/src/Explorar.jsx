import { Link, Route, Routes } from "react-router-dom";
import Musica from './Routes/Explorar/Musica'
import Tendencias from './Routes/Explorar/Tendencias'
import Peliculas from './Routes/Explorar/Peliculas'

export default function Explorar(){
    return<>


        <h1>Explorar Page</h1>
        <Link to='musica/'> <button>Musica</button></Link>
        <Link to='tendencias/'> <button>Tendencias</button></Link>
        <Link to='peliculas/'> <button>Peliculas</button></Link>


        
        <Routes>
            <Route path="musica/" element={<Musica/>}/>
            <Route path="tendencias/" element={<Tendencias/>}/>
            <Route path="peliculas/" element={<Peliculas/>}/>
        </Routes>
    </>
}