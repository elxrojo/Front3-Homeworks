import { useState } from 'react'

function Calculadora({amount, functionProps}) {
    const [count, setCount] = useState(0)

    return(
        <div className='caja'>
            <div>
                <h1>{count}</h1>
            </div>
            <div className='botones'>
                <button onClick={()=> setCount(count + amount)}>+</button>
                <button onClick={()=> setCount(count - amount)}>-</button>
                <button onClick={()=> setCount(0)}>reset</button>
                <button onClick={()=>functionProps(count)}>=</button>
            </div>
        </div>
    )
    
}


export default Calculadora