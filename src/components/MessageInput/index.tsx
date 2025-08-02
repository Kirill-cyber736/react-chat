import IconButton from "@components/IconButton";
import sendingButton from "@assets/icons/sending-button-icon.svg";
import microIconIconSrc from "@assets/icons/micro-icon-disabled.svg";
import { useState, type ReactElement } from "react";
import { IconIds } from "@utils/constants";
import { type FormEvent } from "react";
import "./style.css";


interface IMessageInputProps {
    onSend: (message: string) => void;
}

export default function MessageInput({ onSend }: IMessageInputProps): ReactElement {
    const [message, setMessage] = useState<string>("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (message.trim()) {
            onSend(message);
            setMessage("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="message-input-container">
            <IconButton iconSrc={IconIds.PAPERCLIP_ICON} onClick={() => {}} height="24px"/>
            <div className="input-container">
                <textarea
                    autoFocus
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                    className="message-input"
                    rows={1}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            handleSubmit(e);
                        }
                    }}
                />
            </div>
            <IconButton iconSrc={IconIds.STICKERS_ICON} onClick={() => {}} height="24px"/>
            <button
                type="submit"
                className="send-button"
                disabled={!message.trim()}
            >
                <img src={message.trim() ? sendingButton : microIconIconSrc} />
            </button>
        </form>
    );
}