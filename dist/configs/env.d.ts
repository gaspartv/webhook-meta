import 'dotenv/config';
declare const env: {
    NODE_ENV?: "development" | "testing" | "homologation" | "production";
    PORT?: number;
    RABBITMQ_URL?: string;
    RABBITMQ_SEND?: string;
    RABBITMQ_RECEIVED?: string;
    META_URL?: string;
    META_SECRET?: string;
    SECURITY_ALGORITHM?: string;
    SECURITY_SECRET?: string;
};
export { env };
