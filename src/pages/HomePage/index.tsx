import { type ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavigationButton from "../../components/NavigationButton";
import './style.css'

const HomePage = (): ReactElement => {
  const navigate = useNavigate();

  useEffect(() => {
    const nickName = localStorage.getItem("nickName");
    if (!nickName) {
      navigate("/registration");
    }
  }, [navigate]);

  return (
    <div className="home-page">
      <header className="home-header">
        <div className="home-title">Добрый чат</div>
      </header>
      <NavigationButton />
    </div>
  );
};

export default HomePage;
