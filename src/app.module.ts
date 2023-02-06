import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsModule } from './Events/Events.module';
import { ItemsController } from './Item/items.controller';
import { ItemsModule } from './Item/items.module';
import { ItemsService } from './Item/items.service';
import { ShoppingListController } from './ShoppingList/ShoppingList.controller';
import { ShoppingListModule } from './ShoppingList/ShoppingList.module';
import { ShoppingListService } from './ShoppingList/ShoppingList.service';

const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: "db/shoppingLiztDB",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    ItemsModule,
    ShoppingListModule,
    EventsModule
  ],
  providers: [ItemsService, ShoppingListService],
  controllers: [ItemsController, ShoppingListController]
})
export class AppModule {
}
