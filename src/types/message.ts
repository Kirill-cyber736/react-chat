export interface IMessage {
    id: string;
    text: string;
    timeSended: string;
    isMessageMine: boolean;
    whoIsSender?: string;
    
}
