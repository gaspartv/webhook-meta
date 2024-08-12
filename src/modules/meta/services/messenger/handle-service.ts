import { RestService } from "src/common/rest/rest-service";
import { Log } from "src/config/log";
import { RabbitmqService } from "src/providers/rabbitmq/rabbitmq-service";
import { MessengerMessaging } from "../../payloads/messenger/messaging";
import { MessengerMessage } from "../../payloads/messenger/messaging.message";
import { MessengerAttachment } from "../../payloads/messenger/messaging.message.attachment";
import { MessengerQuickReply } from "../../payloads/messenger/messaging.message.quick-reply";
import { MessengerMessageReferral } from "../../payloads/messenger/messaging.message.referral";
import { MessengerReplyTo } from "../../payloads/messenger/messaging.message.reply-to";
import { MessengerPostback } from "../../payloads/messenger/messaging.postback";
import { MessengerReceivedDto } from "../../payloads/messenger/received";
import {
  BaseSentToApiPayload,
  SendToApiMessagePayload,
  SendToApiStatusPayload,
} from "../../payloads/send-to-api";

@RestService()
export class MessengerService {
  constructor(private readonly rabbitmqService: RabbitmqService) {}

  handlePayloadReceived(payload: MessengerReceivedDto) {
    for (const entry of payload.entry || []) {
      console.log("entry", entry);
      const businessId: string = entry.id;
      if (!businessId) {
        Log.error(
          "failed handle messenger payload. businessId is required.",
          "RabbitmqService.handleMessenger",
        );
        return;
      }
      return this.handleMessaging(entry.messaging, businessId);
    }
  }

  private handleMessaging(dto: MessengerMessaging[], businessId: string) {
    for (const messaging of dto || []) {
      console.log("messaging", messaging);
      const senderId = messaging.sender.id;
      const recipientId = messaging.recipient.id;
      const timestamp = messaging.timestamp;
      const message = messaging.message;
      const postback = messaging.postback;
      const read = messaging.read;
      const delivery = messaging.delivery;
      const basePayload: BaseSentToApiPayload = {
        business: { id: businessId },
        sender: { id: senderId },
        recipient: { id: recipientId },
      };

      if (message) {
        return this.handleMessage(message, basePayload, timestamp);
      }

      if (postback) {
        return this.handlePostback(postback, basePayload, timestamp);
      }

      if (read) {
        return this.handleRead(messaging, basePayload);
      }

      if (delivery) {
        return this.handleDelivery(messaging, basePayload);
      }
    }
  }

  private handleDelivery(
    messaging: MessengerMessaging,
    basePayload: BaseSentToApiPayload,
  ) {
    for (const mid of messaging.delivery?.mids || []) {
      const statusPayload: SendToApiStatusPayload = {
        ...basePayload,
        status: {
          timestamp: messaging.timestamp,
          integrationId: mid,
          delivered: {
            watermark: messaging.delivery.watermark,
          },
        },
      };
      console.log("delivery", statusPayload);
      this.rabbitmqService.sendToQueueStatus(statusPayload);
    }
    return;
  }

  private handleMessageReplyTo(
    basePayload: BaseSentToApiPayload,
    timestamp: number,
    integrationId: string,
    replyTo: MessengerReplyTo,
    text: string,
  ) {
    const messagePayload: SendToApiMessagePayload = {
      ...basePayload,
      message: {
        provider: "messenger",
        timestamp,
        integrationId,
        type: "reply-to",
        text,
        replyTo: {
          integrationId: replyTo.mid,
        },
      },
    };
    console.log("replyTo", messagePayload);
    this.rabbitmqService.sendToQueueMessage(messagePayload);
    return;
  }

  private handleMessageAttachment(
    basePayload: BaseSentToApiPayload,
    timestamp: number,
    integrationId: string,
    attachments: MessengerAttachment[],
    text: string,
  ) {
    for (const attachment of attachments || []) {
      const payload = attachment.payload
        ? {
            url: attachment.payload.url,
          }
        : undefined;
      const messagePayload: SendToApiMessagePayload = {
        ...basePayload,
        message: {
          provider: "messenger",
          timestamp,
          integrationId,
          type: "attachment",
          text,
          attachment: {
            type: attachment.type,
            title: attachment.payload.title,
            payload,
          },
        },
      };
      console.log("attachments", messagePayload);
      this.rabbitmqService.sendToQueueMessage(messagePayload);
    }
    return;
  }

  private handleMessageText(
    basePayload: BaseSentToApiPayload,
    timestamp: number,
    integrationId: string,
    text: string,
  ) {
    const messagePayload: SendToApiMessagePayload = {
      ...basePayload,
      message: {
        provider: "messenger",
        timestamp,
        integrationId,
        type: "text",
        text,
      },
    };
    console.log("text", messagePayload);
    this.rabbitmqService.sendToQueueMessage(messagePayload);
    return;
  }

  private handleMessageQuickReply(quickReply: MessengerQuickReply) {
    console.log("quickReply", quickReply);
  }

  private handleMessageReferral(referral: MessengerMessageReferral) {
    console.log("referral", referral);
  }

  private handleMessage(
    message: MessengerMessage,
    basePayload: BaseSentToApiPayload,
    timestamp: number,
  ) {
    const integrationId = message.mid;
    const text = message.text;
    const quickReply = message.quick_reply;
    const replyTo = message.reply_to;
    const attachments = message.attachments;
    const referral = message.referral;
    // const isDeleted = message.is_deleted;
    const isEcho = message.is_echo;
    // const isUnsupported = message.is_unsupported;

    basePayload.sendBy = isEcho ? "business" : "customer";

    if (replyTo) {
      return this.handleMessageReplyTo(
        basePayload,
        timestamp,
        integrationId,
        replyTo,
        text,
      );
    }

    if (attachments) {
      return this.handleMessageAttachment(
        basePayload,
        timestamp,
        integrationId,
        attachments,
        text,
      );
    }

    if (text) {
      return this.handleMessageText(
        basePayload,
        timestamp,
        integrationId,
        text,
      );
    }

    if (quickReply) {
      return this.handleMessageQuickReply(quickReply);
    }

    if (referral) {
      return this.handleMessageReferral(referral);
    }
  }

  private handlePostback(
    postback: MessengerPostback,
    basePayload: BaseSentToApiPayload,
    timestamp: number,
  ) {
    const integrationId = postback.mid;
    const messagePayload: SendToApiMessagePayload = {
      ...basePayload,
      message: {
        provider: "messenger",
        integrationId,
        timestamp,
        type: "postback",
        text: postback.title,
      },
    };
    console.log("postback", messagePayload);
    this.rabbitmqService.sendToQueueMessage(messagePayload);
    return;
  }

  private handleRead(
    messaging: MessengerMessaging,
    basePayload: BaseSentToApiPayload,
  ) {
    const statusPayload = {
      ...basePayload,
      status: {
        timestamp: messaging.timestamp,
        integrationId: undefined,
        read: {
          watermark: messaging.read.watermark,
        },
      },
    };
    console.log("read", statusPayload);
    this.rabbitmqService.sendToQueueStatus(statusPayload);
    return;
  }
}
