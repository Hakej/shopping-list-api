import { Module } from "@nestjs/common";
import { EventsGateway } from "./Events.gateway";

@Module({
    providers: [EventsGateway]
})
export class EventsModule { 
}