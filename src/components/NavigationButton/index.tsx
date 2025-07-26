import { Link } from "react-router-dom";
import "./style.css";

export default function WelcomeBlock() {
  return (
    <div>
      <div className="welcome-block">
        <Link to="/chat" className="center-link">
          <img
            src="src/assets/icons/logo.svg"
            height="150"
            style={{
              overflow: "hidden"
            }}></img>
        </Link>
      </div>
      <text className="text-style">Telegram 2</text>
    </div>
    
  );
}
