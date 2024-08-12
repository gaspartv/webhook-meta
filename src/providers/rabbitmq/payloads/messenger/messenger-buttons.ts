export type MessengerButtons =
  | ButtonPhoneNumber
  | ButtonAccountLink
  | ButtonLogout
  | ButtonPostback
  | ButtonUrl;

/* The Call Button can be used to initiate a phone call.
This button can be used with the Button and Generic Templates. */
export class ButtonPhoneNumber {
  /* Type of button. Must be phone_number. */
  type: "phone_number";

  /* Button title, 20 character limit. */
  title: string;

  /* Format must have "+" prefix followed by the country code, area code and local number.
  For example, +16505551234. */
  payload: string;
}

/* The log in button triggers the account linking authentication flow. */
export class ButtonAccountLink {
  /* Must be account_link */
  type: "account_link";

  /* Authentication callback URL. Must use HTTPS protocol. */
  url: string;
}

/* The log out button triggers the account unlinking flow. */
export class ButtonLogout {
  /* Must be account_unlink */
  type: "account_unlink";
}

/* When the postback button is tapped, the Messenger Platform sends an event to your postback webhook.
This is useful when you want to invoke an action in your bot.
This button can be used with the Button Template and Generic Template. */
export class ButtonPostback {
  /* Type of button.
  Must be postback. */
  type: "postback";

  /* Button title.
  20 character limit. */
  title: string;

  /* This data will be sent back to your webhook.
  1000 character limit. */
  payload: string;
}

/* The URL Button opens a webpage in the Messenger webview.
This button can be used with the Button and Generic Templates. */
export class ButtonUrl {
  /* Type of button. Must be web_url. */
  type: "web_url";

  /* Button title. 20 character limit. */
  title: string;

  /* This URL is opened in a mobile browser when the button is tapped.
  Must use HTTPS protocol if messenger_extensions is true. */
  url: string;

  /* Optional. Height of the Webview. Valid values: compact, tall, full.
  Defaults to full. */
  webview_height_ratio: "compact" | "tall" | "full";

  /* Optional. Must be true if using Messenger Extensions. */
  messenger_extensions: boolean;

  /* The URL to use on clients that don't support Messenger Extensions.\
  If this is not defined, the url will be used as the fallback.
  It may only be specified if messenger_extensions is true. */
  fallback_url: string;

  /* Optional. Set to hide to disable the share button in the Webview (for sensitive info).
  This does not affect any shares initiated by the developer using Extensions. */
  webview_share_button: string;
}
