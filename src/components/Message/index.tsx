import type { IMessage } from "@app-types/message";
import "./style.css";

interface MessageProps {
    message: IMessage;
}

export default function Message({ message }: MessageProps) {
    return (
        <div className={`message ${message.isMine ? "mine" : "other"}`}>
            <div className="message-text back-button-and-messages">{message.text}</div>
            <div className="message-time times">
                {message.time} <img src="src/assets/icons/read-icon.svg"></img>{" "}
            </div>
        </div>
    );
}
