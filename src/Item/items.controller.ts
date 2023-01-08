import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Item } from './item.entity';
import { ItemsService } from './items.service';

@Controller('Items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) { }

    @Get()
    async getAll(): Promise<Item[]> {
        return await this.itemsService.getAllItems();
    }

    @Get(':id')
    async get(@Param('id') listId: string): Promise<Item> {
        return await this.itemsService.getItem(listId);
    }

    @Put()
    async update(@Body() item: Item): Promise<void> {
        await this.itemsService.updateItem(item);
    }
}
