import { useState } from 'react'

import './App.css'

function App() {
  let [login, setLogin] = useState(true);

  const loginSwitch = ()=>{
    setLogin(!login);
  }

  return (
    <>
     <div className=' mt-10 container p-10 shadow-2xl bg-slate-50 rounded-lg border-1 flex flex-col justify-center items-center w-[85%] gap-6'>
      <img  className='h-30 w-60 bg-cover' src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram-1.png" alt="Instagram Logo" />
      {/* input field */}
      <div className='flex flex-col gap-2 w-[50%] '>
        <input className=' bg-slate-200 py-2 px-2' type="text" placeholder='Phone no, or email' />
        <input hidden ={login} className=' bg-slate-200 py-2 px-2' type="text" placeholder='First Name' />
      <input hidden ={login} className=' bg-slate-200 py-2 px-2' type="text" placeholder='username' />
        <input className=' bg-slate-200 py-2 px-2' type="text" placeholder='Password' />
        <button className='bg-blue-500 hover:bg-blue-700 py-2 px-2 text-white rounded-md'>{login?"Log in":"Sing up"}</button>
      </div>
      {/* for p tag */}
      <p>{login?"Don't have an account?":"Have an account"} 
        <span className=' text-blue-500 hover:text-blue-800 ml-3' onClick={loginSwitch}>{login?"Sing up":"Log in"}</span>
      </p>
     </div>
    </>
  )
}

export default App
