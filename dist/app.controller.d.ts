import { AppService } from './app.service';
import { Item } from './classes/Item';
import { ItemDto } from './classes/Itemdto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): object;
    postItem(itemDto: ItemDto): Item;
    checkItem(id: string, isChecked: boolean): void;
    deleteCheckedItems(): Item[];
}
