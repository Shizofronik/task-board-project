import './styles.css';
import './headBar.css';
import LoginForm from './components/loginForm'
import Main from './components/main'
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import singInValidation from './dataService'


function App() {
  const [userName, setUserName] = useState('')

  const handleLogin = (loginValue) => {
    setUserName(loginValue)
  } 

  return (
    <BrowserRouter>
      <Routes>

          <Route path='' element={<main style={{height: "100vh"}}>
                                    <LoginForm onLogin={handleLogin} />
                                  </main>} />
          <Route path='main' element={<Main TakeUsername={userName} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
