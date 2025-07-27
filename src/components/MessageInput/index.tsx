import sendingButton from "@assets/icons/sending-button-icon.svg";
import microIconIconSrc from "@assets/icons/micro-icon-disabled.svg";
import { useState } from "react";
import "./style.css";

interface MessageInputProps {
    onSend: (message: string) => void;
}

export default function MessageInput({ onSend }: MessageInputProps) {
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim()) {
            onSend(message);
            setMessage("");
        }
    };

    const consolForStickers = () => {
        console.log("Выберите стикер");
    };

    const consolForPaperClip = () => {
        console.log("Выберите файлы");
    };

    return (
        <form onSubmit={handleSubmit} className="message-input-container">
            <button
                className="paperclip-button"
                onClick={(e) => {
                    e.preventDefault();
                    consolForPaperClip();
                }}
            >
                <img
                    src="src/assets/icons/paperclip-icon.svg"
                    className="paperclip-image"
                ></img>
            </button>

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

                <button
                    className="stickers-button"
                    onClick={(e) => {
                        e.preventDefault();
                        consolForStickers();
                    }}
                >
                    <img
                        src="src/assets/icons/stickers-icon.svg"
                        alt="stickers"
                        className="stickers-image"
                    />
                </button>
            </div>

            <button
                type="submit"
                className="send-button"
                disabled={!message.trim()}
            >
                <img
                    src={
                        message.trim()
                            ? sendingButton
                            : microIconIconSrc
                    }
                />
            </button>
        </form>
    );
}
