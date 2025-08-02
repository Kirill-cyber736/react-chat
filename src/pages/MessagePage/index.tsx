import Message from "@components/Message";
import MessageInput from "@components/MessageInput";
import { useState, useRef, useEffect } from "react";
import { type IMessage } from "@app-types/message";
import { Link } from "react-router-dom";
import "./style.css";

function getRandomId(): string {
    return (
        Date.now().toString(36) +
        Math.random().toString(36).substring(2).toString()
    );
}

interface IServerMessage {
    type: "msg";
    username: string;
    text: string;
}

export default function MessagePage() {
    const [secondUsername, setSecondUsername] = useState<string | null>(null);
    const [messages, setMessages] = useState<IMessage[]>([]);

    const [ws, setWs] = useState<WebSocket | null>(null);

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const username: string | null = localStorage.getItem("nickName");

    useEffect(() => {
        const socket = new WebSocket("ws://localhost:3001");

        socket.onopen = () => {
            console.log("Connected to ws");

            socket.send(
                JSON.stringify({ type: "init", username, id: getRandomId() })
            );
        };

         socket.onmessage = (event: MessageEvent) => {
            const data: IServerMessage = JSON.parse(event.data);

            console.log("MESSAGE FROM SERVER: ", data);

            // if (data.type === "init" && data.username !== username) {
            //     setSecondUser(data.username);
            // }

            if (data.type === "msg" && data.text && data.username) {
                if (
                    !secondUsername &&
                    data.username !== localStorage.getItem("nickName")
                ) {
                    setSecondUsername(data.username);

                    console.log("SECOND USERNAME CHANGED: ", data.username);
                }
                const newMessage: IMessage = {
                    id: Date.now().toString(),
                    text: data.text,
                    timeSended: new Date().toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    }),
                    isMessageMine: data.username === localStorage.getItem("nickName"),
                    whoIsSender: data.username,
                };
                if (localStorage.getItem("nickName") !== data.username) {
                    setMessages((prev) => [...prev, newMessage]);
                }
            }
        };

        setWs(socket);

        return;
    }, []);

    const handleSendMessage = (text: string) => {
        const newMessage: IMessage = {
            id: Date.now().toString(),
            text,
            timeSended: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            }),
            isMessageMine: true,
        };

        setMessages([...messages, newMessage]);

        if (ws && ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify({ type: "msg", text, sender: username }));
        }
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
                <img
                    src="src/assets/images/user-icon.png"
                    className="user-icon"
                />
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
