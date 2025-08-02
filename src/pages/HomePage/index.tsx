import IntroSlides from "@components/IntroSlides";
import WelcomeBlock from "@components/NavigationButton";
import { useNavigate, type NavigateFunction } from "react-router-dom";
import { type ReactElement, useEffect } from "react";
import "./style.css";

const HomePage = (): ReactElement => {
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        const nickName: string | null = localStorage.getItem("nickName");
        if (!nickName) {
            navigate("/registration");
        }
    }, [navigate]);

    return (
        <div className="home-page">
            <IntroSlides />
            <WelcomeBlock />
        </div>
    );
};

export default HomePage;
