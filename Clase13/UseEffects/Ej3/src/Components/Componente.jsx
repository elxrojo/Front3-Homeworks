import { useEffect } from "react"

export default function Componentex({valueInput}){
    useEffect(()=>{
        console.log(`buscando datos en api.github.com/users/${valueInput}`);
    }, [valueInput])
    return <h1>{valueInput}</h1>
}