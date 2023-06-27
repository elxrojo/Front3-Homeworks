import { useEffect } from "react";
import style from './ComponenteActivo.module.css' 

export default function ComponenteActivo(){
    useEffect(()=>{
        console.log('Activo');

        return (()=>{
            console.log('Inactivo');
        })
    })
    return <div className={style.comp}> Componente Activo</div>
}