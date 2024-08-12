import { Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { Provider } from "src/common/enums/provider";
import { RestService } from "src/common/rest/rest-service";
import { env } from "src/config/env";
import { Log } from "src/config/log";
import {
  SendToApiMessagePayload,
  SendToApiStatusPayload,
} from "src/modules/meta/payloads/send-to-api";
import { Security } from "src/utils/security";

@RestService()
export class RabbitmqService {
  constructor(
    @Inject(env.RABBITMQ_NAME) private readonly rabbitmq: ClientProxy,
  ) {}

  sendToQueueStatus(payload: SendToApiStatusPayload) {
    try {
      const data = Security.encrypt(JSON.stringify(payload));
      this.rabbitmq.send(Provider.STATUS, data).subscribe((p) => {
        Log.info(p, "RabbitmqService.sendToQueueStatus");
      });
    } catch (err) {
      Log.error(err, "RabbitmqService.sendToQueueStatus");
    }
  }

  sendToQueueMessage(payload: SendToApiMessagePayload) {
    try {
      const data = Security.encrypt(JSON.stringify(payload));
      this.rabbitmq.send(Provider.MESSAGE, data).subscribe((p) => {
        Log.info(p, "RabbitmqService.sendToQueueMessage");
      });
    } catch (err) {
      Log.error(err, "RabbitmqService.sendToQueueMessage");
    }
  }
}
