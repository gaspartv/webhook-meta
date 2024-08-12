import { MessengerAttachment } from "./messenger-attachment";

type QuickReplyType = "text" | "user_phone_number" | "user_email";

export class MessengerMessage {
  /* uma mensagem que contenha somente texto.
    O texto deve estar em UTF-8 e ter menos de 2.000 caracteres. */
  text: string;

  /* An array of objects the describe the quick reply buttons to send.
    A maximum of 13 quick replies are supported. */
  quick_replies?: QuickReply[];

  /* An attachment to send with the quick replies. text or attachment must be set. */
  attachment?: MessengerAttachment;

  /* uma string com dados adicionais a serem passados no webhook */
  metadata?: string;

  /* Precisa ter menos de 1.000 caracteres. */
  message_echo?: string;
}

class QuickReply {
  /*  Must be one of the following
  text: Sends a text button
  user_phone_number: Sends a button allowing recipient to send the phone number associated with their account.
  user_email: Sends a button allowing recipient to send the email associated with their account.*/
  content_type: QuickReplyType;

  /* Required if content_type is 'text'. The text to display on the quick reply button. 20 character limit. */
  title: string;

  /* Required if content_type is 'text'. Custom data that will be sent back to you via the messaging_postbacks webhook event. 1000 character limit.
  May be set to an empty string if image_url is set. */
  payload: string | number;

  /* Optional. URL of image to display on the quick reply button for text quick replies. Image should be a minimum of 24px x 24px. Larger images will be automatically cropped and resized.
  Required if title is an empty string. */
  image_url: string;
}
