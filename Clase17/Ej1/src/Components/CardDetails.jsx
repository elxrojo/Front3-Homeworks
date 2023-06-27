import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function CardDetails(){
    const navigate = useNavigate()
    const {id} = useParams()
    const [details, setDetails] = useState({})

    async function fetchDetails(){
        const fetching = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)).json()
        setDetails(fetching)
        console.log(fetching);
    }

    useEffect(() => {
        fetchDetails()
        },[]);


    return <>
        <h1>{details.title}</h1>
        <p>{details.body}</p>
        <button onClick={()=>navigate(-1)}>Cerrar</button>
    </>
}