import ApplicationRouter from "../../router";
import { BrowserRouter as RouterProvider } from "react-router-dom";
import { type ReactElement } from "react";
import "./style.css";

const App = (): ReactElement => {
    return (
        <div className="app-style">
            <RouterProvider>
                <ApplicationRouter />
            </RouterProvider>
        </div>
    );
};

export default App;