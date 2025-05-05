import { useState, createContext, useContext } from 'react'

const BulbContext = createContext();

export function BulbProvider({ children }){
  const [bulbOn, setBulbOn] = useState(true);

  return <BulbContext.Provider value={{
    bulbOn: bulbOn,
    setBulbOn: setBulbOn
  }}>
    {children}
  </BulbContext.Provider>
}
 
function App() {

  return (
    <>
      <BulbProvider>
       <LightBulb />
       </BulbProvider>
    </>
  )
}

function LightBulb(){
  
  return <div>
    <BulbState />
    <ToggleBulbState />
  </div>
}

function BulbState(){
  const { bulbOn } = useContext(BulbContext);
  return <div>
       {bulbOn ? "Bulb On" : "Bulb Off"}
  </div>
}

function ToggleBulbState(){
  const { bulbOn, setBulbOn } = useContext(BulbContext);
  function toggle(){
    // setBulbOn(currentState => !currentState)
    setBulbOn(!bulbOn)
  }

  return <div>
     <button onClick={toggle}>Toggle the bulb</button>
  </div>
}

export default App
