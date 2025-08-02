import IconButton from "@components/IconButton";
import sendingButton from "@assets/icons/sending-button-icon.svg";
import microIconIconSrc from "@assets/icons/micro-icon-disabled.svg";
<<<<<<< HEAD
import { IconIds } from "@utils/constants";
import { useState } from "react";
=======
import { useState, type JSX } from "react";
>>>>>>> 59044b1 (fix: Renamed unclear variables to more understandable ones, explicitly specified function types where needed)
import "./style.css";

interface MessageInputProps {
    onSend: (message: string) => void;
}

<<<<<<< HEAD
export default function MessageInput({
    onSend
}: MessageInputProps) {
    const [message, setMessage] = useState("");
=======
export default function MessageInput({ onSend }: MessageInputProps): JSX.Element {
    const [message, setMessage] = useState<string>("");
>>>>>>> 59044b1 (fix: Renamed unclear variables to more understandable ones, explicitly specified function types where needed)

    const handleSubmit = (e: React.FormEvent) => {
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