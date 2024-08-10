"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Security = void 0;
const crypto = require("crypto");
const env_1 = require("../configs/env");
class Security {
    static encryptFix(text) {
        const algorithm = env_1.env.SECURITY_ALGORITHM;
        const key = crypto.scryptSync(env_1.env.SECURITY_SECRET, 'salt', 32);
        const iv = Buffer.alloc(16, 0);
        const cipher = crypto.createCipheriv(algorithm, key, iv);
        let encrypted = cipher.update(text, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    }
}
exports.Security = Security;
//# sourceMappingURL=security.js.map