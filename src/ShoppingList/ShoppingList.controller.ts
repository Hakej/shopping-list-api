import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Item } from 'src/Item/item.entity';
import { ShoppingList } from './ShoppingList.entity';
import { ShoppingListService } from './ShoppingList.service';

@Controller('ShoppingList')
export class ShoppingListController {
    constructor(private readonly shoppingListService: ShoppingListService) { }
    
    @Get('')
    async getAll(): Promise<ShoppingList[]> {
        return await this.shoppingListService.getAllShoppingLists();
    }

    @Get(':id')
    async get(@Param('id') listId: string): Promise<ShoppingList> {
        return await this.shoppingListService.getShoppingList(listId);
    }

    @Get('items/:listId')
    async getItems(@Param('listId') listId: string): Promise<Item[]> {
        return await this.shoppingListService.getItemsFromList(listId);
    }

    @Post(':name')
    async add(@Param('name') name: string): Promise<ShoppingList> {
        return await this.shoppingListService.addList(name);
    }

    @Post('addItem/:listId')
    async addItem(@Param('listId') listId: string, @Body() item: Item): Promise<Item> {
        return await this.shoppingListService.addItemToList(listId, item);
    }

    @Delete('deleteInBasketItems/:listId')
    async deleteInBasketItems(@Param('listId') listId: string): Promise<Item[]> {
        return this.shoppingListService.deleteInBasketItems(listId);
    }
}
