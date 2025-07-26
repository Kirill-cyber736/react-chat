import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Message from "../../components/Message/index.tsx";
import MessageInput from "../../components/MessageInput/index.tsx";
import type { IMessage } from "../../types/message.tsx";
import "./style.css";

function getRandomId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2).toString();
}

export default function MessagePage() {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [ws, setWs] = useState<WebSocket | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const username = localStorage.getItem("nickName");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:3001");

    socket.onopen = () => { 
      socket.send(JSON.stringify({ type: "init", username, id: getRandomId()}));
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "msg" ) {
        const newMessage: IMessage = {
          id: Date.now().toString(),
          text: data.text,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          }),
          isMine: data.username === localStorage.getItem("nickName"),
          sender: data.username,
        };
        if(localStorage.getItem("nickName") !== data.username){
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
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isMine: true,
    };

    setMessages([...messages, newMessage]);

    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ type: "msg", text, sender: username }));
    }
  };

  // Автопрокрутка при новых сообщениях
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-page">
      <header className="chat-header">
        <Link to="/" className="chat-back-button">
          ← Назад
        </Link>
        <div className="chat-title">Мой чат</div>
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

