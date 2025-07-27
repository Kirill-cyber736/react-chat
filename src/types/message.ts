export interface IMessage {
    id: string;
    text: string;
    time: string;
    isMine: boolean;
    sender?: string;
}