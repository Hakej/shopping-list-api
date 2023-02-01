import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
import { Socket } from "socket.io";

@WebSocketGateway()
export class EventsGateway {
    @SubscribeMessage('ping')
    handleEvent(
        @MessageBody() data: string,
        @ConnectedSocket() client: Socket,
    ): string {
        client.broadcast.emit('pong', data)
        console.log("pong emitted");
        return data;
    }

    @SubscribeMessage('onItemAdded')
    onItemAdded(
        @MessageBody() data: string,
        @ConnectedSocket() client: Socket,
    ): string {
        return this.onEvent(this.onItemAdded.name, data, client);
    }

    @SubscribeMessage('onItemsDelete')
    onItemsDelete(
        @MessageBody() data: string,
        @ConnectedSocket() client: Socket,
    ): string {
        return this.onEvent(this.onItemsDelete.name, data, client);
    }

    @SubscribeMessage('onItemAddedToBasket')
    onItemAddedToBasket(
        @MessageBody() data: string,
        @ConnectedSocket() client: Socket,
    ): string {
        return this.onEvent(this.onItemAddedToBasket.name, data, client);
    }

    onEvent(eventName: string, data: string, client: Socket): string {
        client.broadcast.emit(eventName, data)
        console.log(`${eventName}: ${JSON.stringify(data)}`);
        return data;
    }
}