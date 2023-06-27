export function NumberCards({infoCards}) {
    return(
        <>
            <div>
                {infoCards.map(infoCard =>{
                    return <div key={infoCard.id}>El numero favorito de {infoCard.name}: {infoCard.number} </div>
                })}
            </div>
        </>
    )
}