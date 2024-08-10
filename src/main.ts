import { NestFactory } from "@nestjs/core";
import { Transport } from "@nestjs/microservices";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { AppModule } from "./app-module";
import { env } from "./configs/env";
import { Log } from "./configs/log";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    { rawBody: true },
  );

  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [env.RABBITMQ_URL],
      queue: env.RABBITMQ_RECEIVED,
      queueOptions: { durable: true },
    },
  });

  await app.startAllMicroservices();

  await app.listen(env.PORT, "0.0.0.0", () => {
    Log.info(env.PORT.toString(), "StartedPort");
  });
}
bootstrap();
