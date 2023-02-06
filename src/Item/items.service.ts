import { Injectable } from '@nestjs/common';
import { Item } from 'src/Item/item.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ItemsService {
    
    constructor(
        @InjectRepository(Item)
        private itemsRepository: Repository<Item>,
    ) { }

    async getAllItems(): Promise<Item[]> {
        return await this.itemsRepository.find();
    }

    async getItem(id: string): Promise<Item> {
        const shoppingList = await this.itemsRepository.findOneBy({ id });
        return shoppingList;
    }
    
    async updateItem(item: Item) {
        await this.itemsRepository.update(item.id, item);
    }
}
