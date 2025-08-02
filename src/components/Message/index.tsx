import type { IMessage } from "@app-types/message";
import type { ReactElement } from "react";
import "./style.css";

interface IMessageProps {
    message: IMessage;
}

export default function Message({ message }: IMessageProps): ReactElement {
    return (
        <div className={`message ${message.isMessageMine ? "mine" : "other"}`}>
            <div className="message-text">{message.text}</div>
            <div className="message-time">
                {message.timeSended} <img src="src/assets/icons/read-icon.svg"></img>{" "}
            </div>
        </div>
    );
}
