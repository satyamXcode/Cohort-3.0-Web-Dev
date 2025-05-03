import { Fragment } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';


function App() {

  return (
    <Fragment>

       <BrowserRouter>

         <Routes>

         <Route path="/" element={<Layout />}>

            <Route path="/neet/online-coaching-class-11" element={<Class11Program />}/>
            <Route path="/neet/online-coaching-class-12" element={<Class12Program />}/>
            <Route path="/" element={<Landing />}/>
            <Route path="*" element={<ErrorPage />}/>

          </Route>

         </Routes>

       </BrowserRouter>

    </Fragment>
  )
}

function Layout(){
  return <Fragment style={{height: "100vh", background: "yellow"}}>
    <Header />
    <div style={{height : "90vh", background: "red"}}>
      <Outlet />
    </div>
    Footer || License-Owner
  </Fragment>
}

function Header(){
  return <Fragment>

         <Link to="/"> Allen </Link>
         |
         <Link to="/neet/online-coaching-class-11"> Class 11 </Link>
         |
         <Link to="/neet/online-coaching-class-12"> Class 12 </Link>

  </Fragment>
}

function ErrorPage() {

  const navigate = useNavigate();

  function redirectUser() {
     navigate("/")
  }

  return <Fragment>
   <h1>Sorry page not found</h1>
   <button onClick={redirectUser}>Go back to landing page</button>
  </Fragment>
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

  const navigate = useNavigate();

  function redirectUser() {
     navigate("/")
  }

  return <Fragment>
   <h1>Neet programs for class 12th</h1>
   <button onClick={redirectUser}>Go back to landing page</button>
  </Fragment>
}


export default App
