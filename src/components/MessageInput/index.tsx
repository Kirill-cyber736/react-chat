import { useState } from 'react';
import './style.css';

interface MessageInputProps {
  onSend: (message: string) => void;
}

export default function MessageInput({ onSend }: MessageInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="message-input-container">
      <textarea
        // ref={inputRef}
        autoFocus
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Напишите сообщение..."
        className="message-input"
        rows={1}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
          }
        }}
      />
      <button 
        type="submit" 
        className="send-button"
        disabled={!message.trim()}
      >
        GO
      </button>
    </form>
  );
}