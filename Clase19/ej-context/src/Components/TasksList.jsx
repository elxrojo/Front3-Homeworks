import { useContext } from "react"
import { ContextList } from "../Contexts/ContextList"
import TaskCard from "./TaskCard"

export default function TasksList(){
    const {tasks, dltTask} = useContext(ContextList)
    return(
        <>
            {tasks.map((task)=>{
                return <TaskCard titulo={task.taskBody} key={task.id} id={task.id} eliminar={dltTask}/>
            })}
        </>
    )
}