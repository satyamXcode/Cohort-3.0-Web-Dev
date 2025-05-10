import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'

function App() {
  return<Fragment>
     <RecoilRoot>
        <MainApp />
     </RecoilRoot>
  </Fragment>
}

function MainApp(){

  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificatonsAtomCount = useRecoilValue(notificatonsAtom);
  const [messagingAtomCount, setMessagingAtomCount] = useRecoilState(messagingAtom);

  return (
    <Fragment>
        <button>Home</button>

        <button>My network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
        <button>Jobs {jobsAtomCount}</button>
        <button>Messaging {notificatonsAtomCount}</button>
        <button>Notification {messagingAtomCount}</button>

        <button onClick={() => {
          setMessagingAtomCount(messagingAtomCount+1);
        }}>Me</button>
    </Fragment>
  )
}

export default App
