import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

   return (
     <Fragment>
       <Counter />
     </Fragment>
   )
}

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
       <CurrentCount count={count} />
       <br />
       <Increase setCount={setCount} />
       <Decrease setCount={setCount} />
    </Fragment>
  )
}

function CurrentCount({count}){
  return (
    <Fragment>
       {count}
    </Fragment>
  )
}

function Decrease({setCount}){
   
   function decrease(){
      setCount(c => c - 1);
   }

   return ( 
   <Fragment>
      <button onClick={decrease}>Decrease</button>
   </Fragment>
   )
}

function Increase({setCount}){

  function increase(){
    setCount(c => c + 1);
 }


  return (
    <Fragment>
      <button onClick={increase}>Increase</button>
    </Fragment>
  )
}

export default App
