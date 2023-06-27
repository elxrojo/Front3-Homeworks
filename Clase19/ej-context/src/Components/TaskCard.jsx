export default function TaskCard({titulo, eliminar,id}) {

    return (
        <>
            <h3>{titulo}</h3>
            <button onClick={()=>eliminar(id)}>Eliminar</button>
        </>
    )
}
