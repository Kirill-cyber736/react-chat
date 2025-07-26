// src/ws-client.ts
export class WsClient {
  private socket: WebSocket | null = null;
  private url: string;
  private reconnectInterval: number = 3000;
  private reconnectAttempts: number = 0;
  private maxReconnectAttempts: number = 5;

  constructor(url: string) {
    this.url = url;
    this.connect();
  }

  private connect(): void {
    try {
      this.socket = new WebSocket(this.url);

      this.socket.onopen = () => {
        this.reconnectAttempts = 0;
        console.log('[WS] Соединение установлено');
      };

      this.socket.onmessage = (event) => {
        // Это сообщение будет выводиться после того как сервер ответит
        console.log('[WS] Сообщение получено:', event.data);
      };

      this.socket.onclose = () => {
        if (this.reconnectAttempts < this.maxReconnectAttempts) {
          console.log(`[WS] Попытка переподключения (${this.reconnectAttempts + 1}/${this.maxReconnectAttempts})...`);
          setTimeout(() => {
            this.reconnectAttempts++;
            this.connect();
          }, this.reconnectInterval);
        } else {
          console.log('[WS] Максимальное количество попыток переподключения достигнуто');
        }
      };

      this.socket.onerror = (error) => {
        console.error('[WS] Ошибка:', error);
      };
    } catch (error) {
      console.error('[WS] Ошибка создания соединения:', error);
    }
  }

  public send(message: string): boolean {
    if (!this.socket) {
      console.warn('[WS] Сокет не инициализирован');
      return false;
    }

    if (this.socket.readyState === WebSocket.OPEN) {
      try {
        console.log('[WS] Сообщение отправлено:', message); // Сначала логируем отправку
        this.socket.send(message); // Затем отправляем
        return true;
      } catch (error) {
        console.error('[WS] Ошибка отправки сообщения:', error);
        return false;
      }
    }

    console.warn('[WS] Не удалось отправить - соединение не активно');
    return false;
  }

  public close(): void {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }

  public get status(): string {
    if (!this.socket) return 'NOT_INITIALIZED';
    
    switch (this.socket.readyState) {
      case WebSocket.CONNECTING: return 'CONNECTING';
      case WebSocket.OPEN: return 'OPEN';
      case WebSocket.CLOSING: return 'CLOSING';
      case WebSocket.CLOSED: return 'CLOSED';
      default: return 'UNKNOWN';
    }
  }
}