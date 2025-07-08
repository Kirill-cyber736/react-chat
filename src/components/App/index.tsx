import MessagePage from '../../pages/MessagePage/index.tsx';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './style.css';

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
