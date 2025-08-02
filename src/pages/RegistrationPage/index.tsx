import { useNavigate, type NavigateFunction } from "react-router-dom";
import { type ReactElement, useState } from "react";
import "./style.css";

const RegistrationPage = (): ReactElement => {
    const [nickName, setNickName] = useState<string>("");
    const navigate: NavigateFunction = useNavigate();
    
    const handleSubmit: () => void = () => {
        if (nickName.trim()) {
            localStorage.setItem("nickName", nickName);
            navigate("/chat");
        }
    };

    return (
        <div className="registration-page">
            <header className="reg-header">
                <h1 className="reg-title">Регистрация</h1>
            </header>
            <input
                type="text"
                value={nickName}
                onChange={(e) => setNickName(e.target.value)}
                placeholder="Введите ваш nickName"
                className="input-field"
            />
            <button onClick={handleSubmit} className="submit-button">
                Зарегистрироваться
            </button>
        </div>
    );
};

export default RegistrationPage;
