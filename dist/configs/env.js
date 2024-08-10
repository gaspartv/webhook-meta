"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
require("dotenv/config");
const zod_1 = require("zod");
const envSchema = zod_1.z.object({
    NODE_ENV: zod_1.z.enum(['development', 'testing', 'homologation', 'production']),
    PORT: zod_1.z.coerce.number(),
    RABBITMQ_URL: zod_1.z.string().url(),
    RABBITMQ_SEND: zod_1.z.string(),
    RABBITMQ_RECEIVED: zod_1.z.string(),
    META_URL: zod_1.z.string().url(),
    META_SECRET: zod_1.z.string(),
    SECURITY_ALGORITHM: zod_1.z.string(),
    SECURITY_SECRET: zod_1.z.string(),
});
const _env = envSchema.safeParse(process.env);
if (_env.success === false) {
    console.error('❌ Invalid environment variables', _env.error.format());
    throw new Error('Invalid environment variables.');
}
const env = _env.data;
exports.env = env;
//# sourceMappingURL=env.js.map