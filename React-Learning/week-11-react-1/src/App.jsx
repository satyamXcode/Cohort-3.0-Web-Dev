import { Fragment, useState } from 'react'

// custom hook
function useCounter() {
   const [count, setCount] = useState(0);

   function increaseCount(){
     setCount(count + 1);
     // setCount(c => c + 1)
   }
   
   return {
     count: count,
     increaseCount: increaseCount
   }
}

function App() {

  const {count, increaseCount} = useCounter();

  return (
    <Fragment>
       <button onClick={increaseCount}>Increase {count}</button>
    </Fragment>
  )
}

export default App
