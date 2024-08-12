import { Body, Get, HttpCode, Post, Query } from "@nestjs/common";
import { RestController } from "src/common/rest/rest-controller";
import { env } from "src/config/env";
import { MetaService } from "./meta-service";
import { ReceiveMetaPayload } from "./payloads/receive-meta";

@RestController("meta")
export class MetaController {
  constructor(private readonly metaService: MetaService) {}

  @Get()
  @HttpCode(200)
  verifyMetaToken(
    @Query("hub.mode") mode: string,
    @Query("hub.verify_token") verifyToken: string,
    @Query("hub.challenge") challenge,
  ) {
    this.metaService.validateMetaToken(mode, verifyToken);
    return challenge;
  }

  @Post()
  @HttpCode(200)
  receiveMetaPayload(
    @Body()
    payload: ReceiveMetaPayload,
  ): void {
    this.metaService.handleMetaPayload(payload);
  }

  @Get("messenger")
  @HttpCode(200)
  async test() {
    const url = `${env.META_URL}/me/messages?access_token=EAAfplrXGQqwBO0Oc2i95NRjJIl6FdXeRw3VQxZA0Krvo56hJN2Fr2VHmYZAJHPOUxylt5hpekSDIIDXW7bqlPIPaVoNfLAWT4E7q0wzVjcgEZCCLb4u7c0lVKyuzt3Ga4ARLvBiis0WTHwfcwHCYDX63U7qrCDsiGsInPDa29pQsL3Pd1W8TP2Pjyfk3OCuiKqkYzZA1S3buke7JKwZDZD`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recipient: {
          id: "1241869559184313",
        },
        message: messageTButtons,
      }),
    }).then((res) => res.json());
    console.log(res);
    return "ok";
  }
}

const messageTButtons = {
  attachment: {
    type: "template",
    payload: {
      template_type: "button",
      text: "What do you want to do next?",
      buttons: [
        {
          type: "postback",
          title: "Visit Messenger",
        },
        {
          type: "web_url",
          url: "https://www.messenger.com",
          title: "Visit Website",
        },
      ],
    },
  },
};

const attachmentPhoneNumber = {
  attachment: {
    type: "template",
    payload: {
      template_type: "button",
      text: "Need further assistance? Talk to a representative",
      buttons: [
        {
          type: "phone_number",
          title: "Call Representative",
          payload: "+15105551234",
        },
      ],
    },
  },
};
