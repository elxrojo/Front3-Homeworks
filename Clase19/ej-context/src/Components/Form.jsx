import { useContext, useState } from "react"
import { ContextList } from "../Contexts/ContextList"

export default function Form(){
    const [tarea, setTarea] = useState('')
    const info = useContext(ContextList)

    return<>
        <form onSubmit={(e)=> e.preventDefault()}>
            <label>Agrega tu tarea!</label>
            <input type="text"
            value={tarea}
            onChange={(e)=> setTarea(e.target.value)}
            />
            <button onClick={()=>{info.addTask(tarea)}}>Agregar</button>
        </form>
    </>
}