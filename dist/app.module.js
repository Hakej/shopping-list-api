"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const items_controller_1 = require("./Item/items.controller");
const items_module_1 = require("./Item/items.module");
const items_service_1 = require("./Item/items.service");
const ShoppingList_controller_1 = require("./ShoppingList/ShoppingList.controller");
const ShoppingList_module_1 = require("./ShoppingList/ShoppingList.module");
const ShoppingList_service_1 = require("./ShoppingList/ShoppingList.service");
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: "db/shoppingLiztDB",
                entities: [__dirname + "/**/*.entity{.ts,.js}"],
                synchronize: true,
            }),
            items_module_1.ItemsModule,
            ShoppingList_module_1.ShoppingListModule
        ],
        providers: [items_service_1.ItemsService, ShoppingList_service_1.ShoppingListService],
        controllers: [items_controller_1.ItemsController, ShoppingList_controller_1.ShoppingListController]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map