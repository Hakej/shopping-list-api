import { Item } from 'src/classes/Item';
import { ItemDto } from './classes/Itemdto';
export declare class AppService {
    items: Item[];
    getItems(): Item[];
    postItem(itemDto: ItemDto): Item;
    checkItem(id: string, isChecked: boolean): Item;
    deleteCheckedItems(): Item[];
    returnBadRequestError(message: string): void;
}
