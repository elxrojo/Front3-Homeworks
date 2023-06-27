export function Disponibles({usuarios, functionFollow}){
    return(
        <>
            <h1>Disponibles</h1>
            {console.log(usuarios)}
            {usuarios.map(usuario => {
                return <li key={usuario.id} onClick={()=>functionFollow(usuario.id)}>{usuario.nombre}, {usuario.edad} años</li>
            })}
        </>
    )
}