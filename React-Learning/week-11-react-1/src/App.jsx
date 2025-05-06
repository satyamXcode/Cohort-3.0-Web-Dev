import { Fragment, useState, useEffect } from 'react'

function App() {

  const [post, getPosts] = useCounter({});

  async function getPosts(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const json = await response.json();
    setPost(json);
  }

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <Fragment>
       {post.title}
    </Fragment>
  )
}

export default App
