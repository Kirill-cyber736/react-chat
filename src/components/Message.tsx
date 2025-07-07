import type { IMessage } from '../types/message';

interface MessageProps {
  message: IMessage;
}

export default function Message({ message }: MessageProps) {
  return (
    <div className={`message ${message.isMine ? 'mine' : 'other'}`}>
      {!message.isMine && (
        <div className="sender">{message.sender}</div>
      )}
      <div className="message-text">{message.text}</div>
      <div className="message-time">{message.time}</div>
    </div>
  );
}