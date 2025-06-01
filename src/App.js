//import logo from './logo.svg';
import './App.css';
import './styles.css';
import './headBar.css';
import LoginForm from './components/loginForm'
import Main from './components/main'
import { useState } from 'react';
//import singInValidation from './dataService'


function App() {
  const [isLoggIn, setLoggIn] = useState(false)
  const [userName, setUserName] = useState('')

  const handleLogin = (isValid, loginValue) => {
    setLoggIn(isValid);
    setUserName(loginValue)
  } 

  return (
    <main style={{height: "100vh"}}>
      {isLoggIn === false
        ? (<div style={{height: '100vh', alignContent: 'center'}}>
            <LoginForm onLogin={handleLogin}/>
          </div>) 
        : (<Main TakeUsername={userName}/>)
      }
    </main>

  )
}

export default App;
