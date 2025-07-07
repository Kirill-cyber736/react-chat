import { useState, useEffect} from 'react'
import { BrowserRouter, Router, Route, Routes, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'
import './pages/Home/Home.jsx'
import MessagePage from './pages/MessagePage'

//TODO in other component

function NavigationButton() {
  const location = useLocation();

  if(location.pathname !== '/') {
    return null;
  }

  return (
    <div className='center-container'>
      <Link to="/chat" className='center-link'>
        Перейти в чат
      </Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>

      <NavigationButton />

      <Routes>
        <Route path="/chat" element={<MessagePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
