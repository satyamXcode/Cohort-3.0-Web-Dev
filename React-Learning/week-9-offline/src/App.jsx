import { useState } from 'react'
 
function App() {

  return (
  
    
      <div>
        <ToggleMessage/>
      </div>
  )
}

const ToggleMessage = () => {
  let [isVisible, setIsVisible] = useState(true);

  function toggle(){
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <button onClick={toggle}>
        Toggle Message
      </button>
      {isVisible && <p style={{color: "black"}}>This message is conditionally rendered!</p>}
    </div>
  )
}

export default App
