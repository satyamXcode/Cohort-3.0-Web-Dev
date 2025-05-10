import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'

function App() {
  return<Fragment>
     <RecoilRoot>
        <MainApp />
     </RecoilRoot>
  </Fragment>
}

function MainApp(){

  const networkNotificationCount = useRecoilValue(networkAtom);

  return (
    <Fragment>
        <button>Home</button>

        <button>My network ()</button>
        <button>Jobs ()</button>
        <button>Messaging ()</button>
        <button>Notification ()</button>

        <button>Me</button>
    </Fragment>
  )
}

export default App
