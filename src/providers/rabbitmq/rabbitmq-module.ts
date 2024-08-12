import {
  Transport,
  ClientsModule as TransportClientsModule,
} from "@nestjs/microservices";
import { RestModule } from "src/common/rest/rest-module";
import { env } from "src/config/env";
import { RabbitmqConsumer } from "./rabbitmq-consumer";
import { RabbitmqService } from "./rabbitmq-service";

@RestModule({
  imports: [
    TransportClientsModule.registerAsync({
      isGlobal: true,
      clients: [
        {
          name: env.RABBITMQ_NAME,
          useFactory: () => ({
            transport: Transport.RMQ,
            options: {
              urls: [env.RABBITMQ_URL],
              queue: env.RABBITMQ_SEND,
              queueOptions: {
                durable: true,
              },
            },
          }),
        },
      ],
    }),
  ],
  controllers: [RabbitmqConsumer],
  providers: [RabbitmqService],
  exports: [RabbitmqService],
})
export class RabbitmqModule {}
