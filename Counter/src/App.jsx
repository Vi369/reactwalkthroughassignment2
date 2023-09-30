import { useState } from 'react'
import "./App.css"


function App() {
  let [counter, setCounter] = useState(0);

  return (
    <>
     <div className='container'>
      <h1>
        {counter}
      </h1>
      <div className='btnContainer'>
      <button className='btn' onClick={()=> setCounter(counter+1)}>
        Increment
      </button>
      <button className='btn' onClick={()=> setCounter(counter-1)}>
        Decrement
      </button>
      </div>
     </div>
    </>
  )
}

export default App
