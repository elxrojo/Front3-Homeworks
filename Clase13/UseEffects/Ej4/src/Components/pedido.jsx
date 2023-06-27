import { useEffect, useState } from "react"

export default function Pedido({cancelar}){
    const [isConfirmed, setIsConfirmed] = useState(false)
    useEffect(()=>{
        console.log('procesando pedido...');
        setTimeout (()=>{  
            setIsConfirmed(true)
        },2000)

        return (()=>{
            console.log('pedido cancelado...');
        })
    }, [])

    return <>
        {isConfirmed ? <h2>Pedido confirmado ✔️ </h2> : <h2>Pedido en proceso ⌛</h2>}    
        {isConfirmed ? undefined : <button onClick={cancelar()}>Cancelar</button>}
    </>

}