import IconButton from "../IconButton";
import sendingButton from "@assets/icons/sending-button-icon.svg";
import microIconIconSrc from "@assets/icons/micro-icon-disabled.svg";
import { useState } from "react";
import "./style.css";

interface MessageInputProps {
    onSend: (message: string) => void;
}

export default function MessageInput({
    onSend
}: MessageInputProps) {
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim()) {
            onSend(message);
            setMessage("");
        }
    };



    return (
        <form onSubmit={handleSubmit} className="message-input-container">
            <IconButton src="src/assets/icons/paperclip-icon.svg" onClick={() => {}} height="24px"/>
            <div className="input-with-stickers">
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
            <IconButton src="src/assets/icons/stickers-icon.svg" onClick={() => {}} height="24px"/>
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