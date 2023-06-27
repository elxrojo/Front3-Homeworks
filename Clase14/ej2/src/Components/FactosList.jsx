export default function FactosList({infoFactos}){
    return<>
        <ul>
            {
            infoFactos.map(facto => {
                console.log({facto});
                return <li key={facto._id}>{facto.text}</li>
            })}
        </ul>
    </>
}