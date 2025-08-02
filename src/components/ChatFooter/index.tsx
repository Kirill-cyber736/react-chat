import SendButton from "@components/SendButton";
import IconButton from "@components/IconButton";
import MessageInput from "@components/MessageInput";
import { IconIds } from "@utils/constants";
import { useState } from "react";
import "./style.css";

interface ChatFooterProps {
    onSend: (message: string) => void;
}

export default function ChatFooter({ onSend }: ChatFooterProps) {
    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        if (message.trim()) {
            onSend(message);
            setMessage("");
        }
    };

    return (
        <div className="chat-footer-container">
            <IconButton
                iconSrc={IconIds.PAPERCLIP_ICON}
                onClick={() => {}}
                height="24px"
            />
            <MessageInput 
                message= {message}
                setMessage = {setMessage}
                onSubmit = {handleSubmit}
            />
            <IconButton
                iconSrc={IconIds.STICKERS_ICON}
                onClick={() => {}}
                height="24px"
            />
            <SendButton 
                disabled= {!message.trim()}
                onClick={handleSubmit}
            />
        </div>
    );
}
