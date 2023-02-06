import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoppingList } from './ShoppingList.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ShoppingList])],
    exports: [TypeOrmModule],
})
export class ShoppingListModule { }