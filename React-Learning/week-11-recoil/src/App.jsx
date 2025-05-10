import { useEffect, useState, memo, Fragment } from 'react';
import './App.css'
import { RecoilRoot, useSetRecoilState, useRecoilValue } from 'recoil';
import { counterAtom, evenSelector } from './store/atoms/counter';

function App(){
    
  return (
    <Fragment>

      <RecoilRoot>

       <Buttons />
       <Counter />
       <IsEven />

      </RecoilRoot>

    </Fragment>
  )
}

function Buttons() {

  const setCount = useSetRecoilState(counterAtom);
   
  function increase() {
     setCount(c => c + 2)
  }

  function decrease(){
     setCount(c => c - 1)
  }

  return ( 
  <Fragment>
     <button onClick={increase}>Increase</button>
     <button onClick={decrease}>Decrease</button>
  </Fragment>
  )
}

function Counter() {

   const count = useRecoilValue(counterAtom);

   return (
     <Fragment>
        {count}
     </Fragment>
   )
}

function IsEven(){

   const even = useRecoilValue(evenSelector);

   return (
     <Fragment>
       {even ? "Even" : "Odd"}
     </Fragment>
   )
}


export default App;

 