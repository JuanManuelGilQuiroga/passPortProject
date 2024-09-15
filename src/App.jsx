import './App.css'
import { ButtonLogIn } from './components/button'

function App() {

  const discord = () => {
    window.open("http://localhost:3000/auth/discord", "_self")
  }

  return (
    <>
      <main>
        <ButtonLogIn name="Google" color="#E81E1E"/>
        <ButtonLogIn name="Discord" color="#5865f2" logIn={discord}/>
        <ButtonLogIn name="Facebook" color="#38569e"/>
      </main>
    </>
  )
}

export default App
