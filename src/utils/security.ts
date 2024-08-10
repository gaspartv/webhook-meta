import * as crypto from 'crypto';
import { env } from 'src/configs/env';

export class Security {
  static encryptFix(text: string) {
    const algorithm = env.SECURITY_ALGORITHM;
    const key = crypto.scryptSync(env.SECURITY_SECRET, 'salt', 32);
    const iv = Buffer.alloc(16, 0);

    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    return encrypted;
  }
}
