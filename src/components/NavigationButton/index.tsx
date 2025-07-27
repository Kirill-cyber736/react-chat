import { Link } from "react-router-dom";
import "./style.css";

export default function NavigationButton() {
    return (
        <div className="center-container">
            <Link to="/chat" className="center-link">
                Перейти в чат
            </Link>
        </div>
    );
}
