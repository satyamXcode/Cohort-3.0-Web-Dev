import { Fragment, useState, useEffect } from 'react'
import { usePostTitle, useFetch } from './hooks/useFetch'
import { usePrev } from './hooks/usePrev';

function App() {
  const [state, setState] = useState(0);
  const prev = usePrev(state);
  

  return (
    <Fragment>
      <p>{state}</p>
      <button
        onClick={() => {
          setState((curr) => curr + 1);
  }}>
    Click Me
  </button>
  <p>The previous value was {prev}</p>
    </Fragment>
  )
}

export default App
