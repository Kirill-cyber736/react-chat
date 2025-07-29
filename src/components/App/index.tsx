import HomePage from "@pages/HomePage";
import MessagePage from "@pages/MessagePage";
import RegistrationPage from "@pages/RegistrationPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style.css";

function App() {
    return (
        <div className="body">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/chat" element={<MessagePage />} />
                    <Route
                        path="/registration"
                        element={<RegistrationPage />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
