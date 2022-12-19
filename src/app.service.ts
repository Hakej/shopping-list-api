import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Item } from 'src/classes/Item'
import { ItemDto } from './classes/Itemdto';
import { v4 as uuid } from "uuid";

@Injectable()
export class AppService {
  items: Item[] = []

  getItems(): Item[] {
    return this.items;
  }

  postItem(itemDto: ItemDto): Item {
    if (!itemDto.name) {
      this.returnBadRequestError("Name is missing");
    } else if (!itemDto.amount) {
      this.returnBadRequestError("Amount is missing");
    } else if (!itemDto.isChecked === null) {
      this.returnBadRequestError("IsChecked is missing");
    }

    const newItemId = uuid();
    const newItem = new Item(newItemId, itemDto.name, itemDto.amount, itemDto.isChecked);
    this.items.push(newItem);

    return newItem;
  }

  checkItem(id: string, isChecked: boolean) {
    const indexOfItemToCheck = this.items.findIndex((item) => item.id === id);

    if (indexOfItemToCheck === -1) {
      this.returnBadRequestError(`There's no item of id "${id}".`)
    }
    this.items[indexOfItemToCheck].isChecked = isChecked
  }

  deleteCheckedItems(): Item[] {
    this.items = this.items.filter(item => !item.isChecked);
    return this.items;
  }

  returnBadRequestError(message: string) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: message,
      }, HttpStatus.BAD_REQUEST, {});
  }
}
