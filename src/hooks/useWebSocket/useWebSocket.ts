import { useEffect, useState } from 'react';
import { type IMessage } from '@app-types/message';

function getRandomId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2).toString();
}

export const useWebSocket = (
    username: string | null,
    handleNewMessage: (msg: IMessage) => void,
    setSecondUsername: (username: string) => void
) => {
    const url = "ws://localhost:3001";
    const [ws, setWs] = useState<WebSocket | null>(null);

    useEffect(() => {
        if (!username) return;

        const socket = new WebSocket(url);

        socket.onopen = () => {
            console.log("Connected to ws");
            socket.send(JSON.stringify({ type: "init", username, id: getRandomId() }));
        };

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.log("MESSAGE FROM SERVER: ", data);

            if (data.type === "msg") {
                if (!data.isMine && data.username !== username) {
                    setSecondUsername(data.username);
                }

                const newMessage: IMessage = {
                    id: Date.now().toString(),
                    text: data.text,
                    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                    isMine: data.username === username,
                    sender: data.username,
                };

                handleNewMessage(newMessage);
            }
        };

        setWs(socket);

        return () => {
            socket.close();
        };
    }, [ username]);

    const sendMessage = (text: string) => {
        if (ws && ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify({ type: "msg", text, sender: username }));
        }
    };

    return { sendMessage };
};