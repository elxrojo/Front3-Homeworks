
export function Seguidos({seguidos,functionUnfollow}){
    return(
        <>
            <h1>Seguidos</h1>
            {seguidos.map(seguido => {
                return <li key={seguido.id} onClick={()=>functionUnfollow(seguido.id)}>{seguido.nombre}, {seguido.edad} años</li>
            })}
        </>
    )
}