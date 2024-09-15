import './App.css'
import { ButtonLogIn } from './components/button'

function App() {
  const google = () => {
    window.open("http://localhost:3000/auth/google", "_self")
  }

  const facebook = () => {
    window.open("http://localhost:3000/auth/facebook", "_self")
  }

  const discord = () => {
    window.open("http://localhost:3000/auth/discord", "_self")
  }

  return (
    <>
      <main>
        <ButtonLogIn name="Google" color="#E81E1E" logIn={google}/>
        <ButtonLogIn name="Discord" color="#5865f2" logIn={discord}/>
        <ButtonLogIn name="Facebook" color="#38569e" logIn={facebook}/>
      </main>
    </>
  )
}

export default App
