import { useEffect, useState } from "react";

export default function Fetcheador() {
    const [titulo, setTitulo] = useState('')
    useEffect(()=>{
        async function fetching(){
            let result = await fetch('https://jsonplaceholder.typicode.com/posts/1')
            let jsonResult=  await result.json();
            setTitulo(jsonResult.title)
        }
        fetching();
    })

    return <>
        <h1>{titulo}</h1>
    </>
}