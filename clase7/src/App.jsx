// import { useState } from 'react'
import Calculadora from './Components/Calculadora'
import { useState } from 'react'

import './App.css'

function App() {
  const [sum, setSum] = useState(0)

  function onEqual(count){
    console.log(count);
    setSum(sum + count)
}
  return (
    <>
      <div className='contain'>
        <Calculadora amount={1} functionProps={onEqual}/>
        <Calculadora amount={5} functionProps={onEqual} />
        <Calculadora amount={13} functionProps={onEqual}/>  
      </div>
      
      <div className='caja total'>
          <h3>El total es: {sum}</h3>
      </div>

    </>
  )
}

export default App
