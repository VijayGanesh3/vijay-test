import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './login/Login'
import ForgotPassword from './login/ForgotPassword'
import HomeLayout from './layouts/HomeLayout'

function App() {

  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/forgot-password' element={<ForgotPassword />}></Route>
            <Route path='/home' element={<HomeLayout />} />
        </Routes>
      </Router>
    </div >
    </>
  )
}

export default App
