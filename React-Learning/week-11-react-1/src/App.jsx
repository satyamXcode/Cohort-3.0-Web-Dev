import { Fragment, useState, useEffect } from 'react'
import { usePostTitle } from './hooks/useFetch'

function App() {

  const postTitle = usePostTitle();

  return (
    <Fragment>
       {postTitle}
    </Fragment>
  )
}

export default App
