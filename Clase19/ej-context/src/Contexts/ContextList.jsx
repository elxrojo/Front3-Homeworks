import { createContext, useState } from "react"

export const ContextList = createContext()

export default function ListProvider(props){
    const [tasks, setTasks] = useState([])

    function dltTask(id){
        setTasks(tasks.filter(task => task.id !== id))
    }

    function addTask(task){
        setTasks([...tasks, {
            taskBody: task,
            id: Date.now()
        }])
    }

    const value = {
        tasks,
        dltTask,
        addTask
    }

    return (
        <ContextList.Provider value={value}>
            {props.children}
        </ContextList.Provider>
    )
}