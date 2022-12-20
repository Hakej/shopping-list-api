import { AppService } from './app.service';
import { Item } from './classes/Item';
import { ItemDto } from './classes/Itemdto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getItems(): Item[];
    postItem(itemDto: ItemDto): Item;
    checkItem(id: string, isCheckedVal: string): Item;
    deleteCheckedItems(): Item[];
}
