import type { IMessage } from "@app-types/message";
import type { ReactElement } from "react";
import "./style.css";

interface IMessageProps {
    message: IMessage;
}

export default function Message({ message }: IMessageProps): ReactElement {
    return (
<<<<<<< HEAD
        <div className={`message ${message.isMessageMine ? "mine" : "other"}`}>
            <div className="message-text">{message.text}</div>
            <div className="message-time">
                {message.timeSended} <img src="src/assets/icons/read-icon.svg"></img>{" "}
            </div>
=======
        <div className={`message ${message.isMine ? "mine" : "other"}`}>
            <div className="message-text secondary-text">{message.text}</div>
            <div className="message-time meta-text">{message.time}</div>
>>>>>>> 39ddde1328f96a0a069cdaea5bdf8c222c1d7a6d
        </div>
    );
}
