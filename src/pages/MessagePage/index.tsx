import Message from "@components/Message";
import MessageInput from "@components/MessageInput";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { type IMessage } from '@app-types/message';
import { useChatData } from "@hooks/useChatData/useChatData";
import { useWebSocket } from "@hooks/useWebSocket/useWebSocket"
import "./style.css";

export default function MessagePage() {
    const username = localStorage.getItem("nickName");
    const { secondUsername, messages, setSecondUsername, handleNewMessage } = useChatData();
    const { sendMessage } = useWebSocket(
        username,
        handleNewMessage,
        setSecondUsername
    );

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const handleSendMessage = (text: string) => {
        const newMessage: IMessage = {
            id: Date.now().toString(),
            text,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            isMine: true,
            sender: username || "You",
        };

        handleNewMessage(newMessage);
        sendMessage(text);
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="chat-page">
            <header className="chat-header">
                <Link to="/" className="chat-back-button">
                    ← Chats
                </Link>
                <div className="second-user-name-title">
                    {secondUsername ? secondUsername : "now you're alone"}
                </div>
                <img src="src/assets/images/user-icon.png" className="user-icon" />
            </header>

            <div className="messages-container">
                {messages.map((msg) => (
                    <Message key={msg.id} message={msg} />
                ))}
                <div ref={messagesEndRef} />
            </div>

            <MessageInput onSend={handleSendMessage} />
        </div>
    );
}