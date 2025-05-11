import { Fragment, useEffect, useMemo, useState } from 'react'
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

  const [networkCount, setNetworkCount] = useRecoilState(notification);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  useEffect(() => {
     //Fetch
     axios.get("https://sum-server.100xdevs.com/notification")
      .then(res => {
         setNetworkCount(res.data)
      })
  }, [])

  return (
    <Fragment>

        <button>Home</button>

        <button>My network ({networkCount.networks >= 100 ? "99+" : networkCount.networks})</button>
        <button>Jobs {networkCount.jobs}</button>
        <button>Messaging {networkCount.messaging}</button>
        <button>Notifications {networkCount.notifications}</button>

        <button>Me ({totalNotificationCount})</button>
       
    </Fragment>
  )
}

export default App
