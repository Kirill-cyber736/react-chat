import App from "./components/App/index.tsx";
import { createRoot } from "react-dom/client";
import "./main.css";
import { WsClient } from './ws-client';

const client = new WsClient("ws://localhost:3001");

createRoot(document.getElementById("root")!).render(
    <App />
);