import { Fragment, useState, useEffect, useRef } from 'react'
import { usePostTitle, useFetch } from './hooks/useFetch'
import { usePrev } from './hooks/usePrev';

function useDebounce(originalFn) {
   const currentClock = useRef();

   const fn = () => {
      clearTimeout(currentClock.current);
      currentClock.current = setTimeout(originalFn, 200);
   }
   return fn;
}

function App() {
   function sendDataToBackend(){
     fetch("api.amazon.com/search/");
   }

   const debouncedFn = useDebounce(sendDataToBackend);

  return (
    <Fragment>
     <input type="text" onChange={debouncedFn} />
    </Fragment>
  )
}

export default App
