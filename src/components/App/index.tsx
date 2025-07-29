import ApplicationRouter from "../../router";
import { BrowserRouter as RouterProvider } from "react-router-dom";
import { type ReactElement } from "react";
import "./style.css";

const Application = (): ReactElement => {
    return (
        <div className="application">
            <RouterProvider>
                <ApplicationRouter />
            </RouterProvider>
        </div>
    );
};

export default Application;