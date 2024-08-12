import * as crypto from "crypto";
import { env } from "src/config/env";

export class Security {
  static encrypt(text: string): string {
    const algorithm = env.SECURITY_ALGORITHM;
    const key = crypto.scryptSync(env.SECURITY_SECRET, "salt", 16);
    const iv = Buffer.alloc(16, 0);
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, "utf8", "hex");
    encrypted += cipher.final("hex");
    return encrypted;
  }

  static decrypt(data: string) {
    const algorithm = env.SECURITY_ALGORITHM;
    const key = crypto.scryptSync(env.SECURITY_SECRET, "salt", 16);
    const iv = Buffer.alloc(16, 0);
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(data, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
  }
}
