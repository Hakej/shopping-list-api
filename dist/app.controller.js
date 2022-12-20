"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const app_service_1 = require("./app.service");
const Item_1 = require("./classes/Item");
const Itemdto_1 = require("./classes/Itemdto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getItems() {
        return this.appService.getItems();
    }
    postItem(itemDto) {
        return this.appService.postItem(itemDto);
    }
    checkItem(id, isCheckedVal) {
        const isChecked = isCheckedVal === 'true';
        return this.appService.checkItem(id, isChecked);
    }
    deleteCheckedItems() {
        return this.appService.deleteCheckedItems();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], AppController.prototype, "getItems", null);
__decorate([
    (0, decorators_1.Post)(),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Itemdto_1.ItemDto]),
    __metadata("design:returntype", Item_1.Item)
], AppController.prototype, "postItem", null);
__decorate([
    (0, decorators_1.Put)('checkItem/:id/:isChecked'),
    __param(0, (0, decorators_1.Param)('id')),
    __param(1, (0, decorators_1.Param)('isChecked')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Item_1.Item)
], AppController.prototype, "checkItem", null);
__decorate([
    (0, decorators_1.Delete)('deleteCheckedItems'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], AppController.prototype, "deleteCheckedItems", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map