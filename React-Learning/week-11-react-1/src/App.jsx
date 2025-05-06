import { Fragment, useState, useEffect } from 'react'
import { usePostTitle, useFetch } from './hooks/useFetch'

function App() {

  const { finalData } = useFetch("https://jsonplaceholder.typicode.com/todos/1");

  return (
    <Fragment>
       {JSON.stringify(finalData)}
    </Fragment>
  )
}

export default App
