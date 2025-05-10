import { Fragment, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { messagingAtom, totalNotificationSelector } from './atoms'

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
  const messagingAtomCount = useRecoilValue(messagingAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  // const totalNotificationCount = useMemo(() => {
  //   return networkNotificationCount + jobsAtomCount + notificatonsAtomCount + messagingAtomCount;
  // }, [networkNotificationCount, jobsAtomCount, notificatonsAtomCount, messagingAtomCount])

  return (
    <Fragment>
        <button>Home</button>

        <button>My network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
        <button>Jobs {jobsAtomCount}</button>
        <button>Messaging {notificatonsAtomCount}</button>
        <button>Notification {messagingAtomCount}</button>

        <ButtonUpdater />
       
    </Fragment>
  )
}

function ButtonUpdater() {
   const setMessagingAtomCount = useSetRecoilState(messagingAtom);
   return (
   <Fragment>
      <button onClick={() => {
          setMessagingAtomCount(c => c + 1);
        }}>Me</button>
   </Fragment>
   )
}

export default App
