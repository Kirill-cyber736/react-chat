import { useState } from 'react';
import { type IMessage } from '@app-types/message';

export const useChatData = () => {
    const [secondUsername, setSecondUsername] = useState<string | null>(null);
    const [messages, setMessages] = useState<IMessage[]>([]);

    const handleNewMessage = (message: IMessage) => {
        setMessages((prev) => [...prev, message]);
    };

    return {
        secondUsername,
        setSecondUsername,
        messages,
        setMessages,
        handleNewMessage,
    };
};