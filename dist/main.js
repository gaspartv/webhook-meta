"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app-module");
const log_1 = require("./configs/log");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const microservices_1 = require("@nestjs/microservices");
const env_1 = require("./configs/env");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter(), { rawBody: true });
    const x = 0;
    const y = 1;
    if (x >= y)
        return;
    app.connectMicroservice({
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: [env_1.env.RABBITMQ_URL],
            queue: env_1.env.RABBITMQ_RECEIVED,
            queueOptions: { durable: true },
        },
    });
    await app.startAllMicroservices();
    await app.listen(env_1.env.PORT, '0.0.0.0', () => {
        log_1.Log.info(env_1.env.PORT.toString(), 'StartedPort');
    });
}
bootstrap();
//# sourceMappingURL=main.js.map