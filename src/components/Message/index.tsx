import type { IMessage } from "@app-types/message";
import "./style.css";
import type { JSX } from "react";

interface MessageProps {
    message: IMessage;
}

export default function Message({ message }: MessageProps): JSX.Element {
    return (
        <div className={`message ${message.isMessageMine ? "mine" : "other"}`}>
            <div className="message-text">{message.text}</div>
            <div className="message-time">
                {message.timeSended} <img src="src/assets/icons/read-icon.svg"></img>{" "}

            </div>
        </div>
    );
}
