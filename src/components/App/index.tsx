import HomePage from "../../pages/HomePage/index.tsx";
import MessagePage from "../../pages/MessagePage/index.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style.css";
import RegistrationPage from "../../pages/RegistrationPage/index.tsx";

function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<MessagePage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
