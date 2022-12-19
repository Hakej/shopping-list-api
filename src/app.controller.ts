import { Controller, Get } from '@nestjs/common';
import { Body, Delete, Param, Post, Put } from '@nestjs/common/decorators';
import { AppService } from './app.service';
import { Item } from './classes/Item';
import { ItemDto } from './classes/Itemdto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): object {
    return this.appService.getItems();
  }

  @Post()
  postItem(@Body() itemDto: ItemDto): Item {
    return this.appService.postItem(itemDto);
  }

  @Put('checkItem/:id/:isChecked')
  checkItem(@Param('id') id: string, @Param('isChecked') isChecked: boolean) {
    return this.appService.checkItem(id, isChecked);
  }

  @Delete('deleteCheckedItems')
  deleteCheckedItems(): Item[] {
    return this.appService.deleteCheckedItems();
  }
}
