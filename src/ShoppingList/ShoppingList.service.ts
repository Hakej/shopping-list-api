import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from 'src/Item/item.entity';
import { Repository } from 'typeorm';
import { ShoppingList } from './ShoppingList.entity';

@Injectable()
export class ShoppingListService {

    constructor(
        @InjectRepository(ShoppingList)
        private shoppingListRepository: Repository<ShoppingList>,
        @InjectRepository(Item)
        private itemsRepository: Repository<Item>,
    ) { }
    
    async getAllShoppingLists(): Promise<ShoppingList[]> {
        return await this.shoppingListRepository.find();
    }

    async getShoppingList(listId: string): Promise<ShoppingList> {
        const shoppingList = await this.shoppingListRepository.findOneBy({ id: listId });
        return shoppingList;
    }

    async getItemsFromList(listId: string): Promise<Item[]> {
        const shoppingList = await this.shoppingListRepository.createQueryBuilder('shopping_list')
            .leftJoinAndSelect('shopping_list.items', 'items')
            .where(`shopping_list.id = "${listId}"`)
            .getOne();
        return shoppingList.items;
    }

    async addList(name: string): Promise<ShoppingList> {
        const newShoppingList = new ShoppingList(name);
        return await this.shoppingListRepository.save(newShoppingList);
    }

    async addItemToList(listId: string, item: Item): Promise<Item> {
        const shoppingList = await this.getShoppingList(listId);
        item.shoppingList = shoppingList;
        return await this.itemsRepository.save(item);
    }

    async deleteInBasketItems(listId: string): Promise<Item[]> {
        const shoppingList = await this.getShoppingList(listId);
        const itemsToDelete = await this.itemsRepository.findBy({ isInBasket: true, shoppingList: shoppingList });
        await this.itemsRepository.remove(itemsToDelete);
        return await this.getItemsFromList(listId);
    }
}
