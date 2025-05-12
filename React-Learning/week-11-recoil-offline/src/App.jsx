import { Fragment, useEffect, useMemo, useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { todosAtomFamily } from './atoms'

function App() {
  return<Fragment>
     <RecoilRoot>
        <Todo id = {1} />
        <Todo id = {2} />
     </RecoilRoot>
  </Fragment>
}

function Todo({id}){

  const currentTodo = useRecoilValue(todosAtomFamily(id));

  return (
    <Fragment>

      {currentTodo.title}
      {currentTodo.description}
      <br />
       
    </Fragment>
  )
}

export default App
