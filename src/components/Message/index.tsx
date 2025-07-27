import type { IMessage } from "../../types/message.tsx";
import "./style.css";

interface MessageProps {
    message: IMessage;
}

export default function Message({ message }: MessageProps) {
    return (
        <div className={`message ${message.isMine ? "mine" : "other"}`}>
            <div className="message-text">{message.text}</div>
            <div className="message-time">
                {message.time} <img src="src/assets/icons/read-icon.svg"></img>{" "}
            </div>
        </div>
    );
}
