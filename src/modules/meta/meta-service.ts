import { BadRequestException } from "@nestjs/common";
import { RestService } from "src/common/rest/rest-service";
import { env } from "src/config/env";
import { Log } from "src/config/log";
import { ReceiveMetaPayload } from "./payloads/receive-meta";
import { MessengerService } from "./services/messenger/handle-service";

@RestService()
export class MetaService {
  constructor(private readonly messengerReceivedService: MessengerService) {}

  validateMetaToken(mode: string, verifyToken: string): void {
    const subscribeMode = mode == "subscribe";
    const tokenMatch = verifyToken == env.META_SECRET;
    if (!subscribeMode || !tokenMatch) {
      const errorMessage = "failed validation meta token.";
      Log.error(errorMessage, "RabbitmqService.validateMetaToken");
      throw new BadRequestException(errorMessage);
    }
  }

  handleMetaPayload(payload: ReceiveMetaPayload): void {
    switch (payload.object) {
      case "instagram":
        this.handleInstagram();
        break;
      case "page":
        this.messengerReceivedService.handlePayloadReceived(payload);
        break;
      case "whatsapp_business_account":
        this.handleWhatsapp();
        break;
      default:
        Log.error(
          "failed handle meta payload.",
          "RabbitmqService.handleMetaPayload",
        );
        throw new BadRequestException("failed handle meta payload.");
    }
  }

  handleWhatsapp() {}

  handleInstagram() {}
}
