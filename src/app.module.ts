import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './Item/item.entity';
import { ItemsController } from './Item/items.controller';
import { ItemsModule } from './Item/items.module';
import { ItemsService } from './Item/items.service';
import { ShoppingListController } from './ShoppingList/ShoppingList.controller';
import { ShoppingList } from './ShoppingList/ShoppingList.entity';
import { ShoppingListModule } from './ShoppingList/ShoppingList.module';
import { ShoppingListService } from './ShoppingList/ShoppingList.service';

const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Item, ShoppingList],
      synchronize: true,
      autoLoadEntities: true,
    }),
    ItemsModule,
    ShoppingListModule
  ],
  providers: [ItemsService, ShoppingListService],
  controllers: [ItemsController, ShoppingListController]
})
export class AppModule {
}
