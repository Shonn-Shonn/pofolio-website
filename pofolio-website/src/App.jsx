import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {

  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false)
  }

  return (
    <>
      <Navbar/>
     
    </>
  )
}

export default App
