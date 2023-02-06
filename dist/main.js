"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const CurrentDateLogger_1 = require("./Logger/CurrentDateLogger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    const currentDateLogger = new CurrentDateLogger_1.CurrentDateLogger(60 * 1000);
    await app.listen(process.env.PORT || 5001);
}
bootstrap();
//# sourceMappingURL=main.js.map