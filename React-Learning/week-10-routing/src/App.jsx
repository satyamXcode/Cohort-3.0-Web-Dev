import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Fragment>

       <BrowserRouter>

         <Routes>

            <Route path="/neet/online-coaching-class-11" element={<Class11Program />}/>
            <Route path="/neet/online-coaching-class-12" element={<Class12Program />}/>
            <Route path="/" element={<Landing />}/>

         </Routes>

       </BrowserRouter>

    </Fragment>
  )
}

function Landing() {
   return <Fragment>
    <h1>Welcome to allen</h1>
   </Fragment>
}

function Class11Program() {
  return <Fragment>
   <h1>Neet programs for class 11th</h1>
  </Fragment>
}

function Class12Program() {
  return <Fragment>
   <h1>Neet programs for class 12th</h1>
  </Fragment>
}


export default App
