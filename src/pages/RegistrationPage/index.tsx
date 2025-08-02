import { type ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const RegistrationPage = (): ReactElement => {
    const [nickName, setNickName] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (nickName.trim()) {
            localStorage.setItem("nickName", nickName);
            navigate("/chat");
        }
    };

    return (
        <div className="registration-page">
            <header className="reg-header">
                <h1 className="reg-title title-text">Регистрация</h1>
            </header>
            <input
                type="text"
                value={nickName}
                onChange={(e) => setNickName(e.target.value)}
                placeholder="Введите ваш nickName"
                className="input-field secondary-text"
            />
            <button onClick={handleSubmit} className="submit-button">
                Зарегистрироваться
            </button>
        </div>
    );
};

export default RegistrationPage;
