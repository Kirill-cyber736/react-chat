import { type IMessage } from "@app-types/message";

function getRandomId() {
    return (
        Date.now().toString(36) +
        Math.random().toString(36).substring(2).toString()
    );
}

export const useWebSocket = (
    username: string | null,
    secondUsername: string | null,
    setSecondUsername: React.Dispatch<React.SetStateAction<string | null>>,
    setMessages: React.Dispatch<React.SetStateAction<IMessage[]>>,
    socket: WebSocket
) => {
    // const socket = new WebSocket("ws://localhost:3001");

    socket.onopen = () => {
        console.log("Connected to ws");

        socket.send(
            JSON.stringify({ type: "init", username, id: getRandomId() })
        );
    };

    socket.onmessage = (event) => {
        const data = JSON.parse(event.data);

        console.log("MESSAGE FROM SERVER: ", data);

        if (data.type === "msg") {
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
                time: new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                }),
                isMine: data.username === localStorage.getItem("nickName"),
                sender: data.username,
            };
            if (localStorage.getItem("nickName") !== data.username) {
                setMessages((prev) => [...prev, newMessage]);
            }
        }
    };
}