import { useState } from 'react'
import './App.css'
import { ButtonLogIn } from './components/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <ButtonLogIn name="Google" color="#E81E1E"/>
        <ButtonLogIn name="Discord" color="#5865f2"/>
        <ButtonLogIn name="Facebook" color="#38569e"/>
      </main>
    </>
  )
}

export default App
