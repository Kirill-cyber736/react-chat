import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Message from '../components/Message';
import MessageInput from '../components/MessageInput';
import type { IMessage } from '../types/message';
import '../App.css';

export default function MessagePage() {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = (text: string) => {
    const newMessage: IMessage = {
      id: Date.now().toString(),
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMine: true,
    };
    setMessages([...messages, newMessage]);
  };

  // Автопрокрутка при новых сообщениях
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-page">
      <header className="chat-header">
        <Link to="/" className="chat-back-button">← Назад</Link>
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