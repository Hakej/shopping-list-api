"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const Item_1 = require("./classes/Item");
const uuid_1 = require("uuid");
let AppService = class AppService {
    constructor() {
        this.items = [];
    }
    getItems() {
        return this.items;
    }
    postItem(itemDto) {
        if (!itemDto.name) {
            this.returnBadRequestError("Name is missing");
        }
        else if (!itemDto.amount) {
            this.returnBadRequestError("Amount is missing");
        }
        else if (!itemDto.isChecked === null) {
            this.returnBadRequestError("IsChecked is missing");
        }
        const newItemId = (0, uuid_1.v4)();
        const newItem = new Item_1.Item(newItemId, itemDto.name, itemDto.amount, itemDto.isChecked);
        this.items.push(newItem);
        return newItem;
    }
    checkItem(id, isChecked) {
        const indexOfItemToCheck = this.items.findIndex((item) => item.id === id);
        if (indexOfItemToCheck === -1) {
            this.returnBadRequestError(`There's no item of id "${id}".`);
        }
        this.items[indexOfItemToCheck].isChecked = isChecked;
    }
    deleteCheckedItems() {
        this.items = this.items.filter(item => !item.isChecked);
        return this.items;
    }
    returnBadRequestError(message) {
        throw new common_1.HttpException({
            status: common_1.HttpStatus.BAD_REQUEST,
            error: message,
        }, common_1.HttpStatus.BAD_REQUEST, {});
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map