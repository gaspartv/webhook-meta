interface EmailReceiveDto {
  email?: string;
  type?: string; // Standard values are HOME and WORK.
}

interface AddressReceiveDto {
  street?: string; // Street number and name.
  city?: string; // City name.
  state?: string; // State abbreviation.
  zip?: string; // ZIP code.
  country?: string; // Full country name.
  country_code?: string; // Two-letter country abbreviation.
  type?: string; // Standard values are HOME and WORK.
}

interface NameReceiveDto {
  formatted_name: string; // Required. Full name, as it normally appears.
  first_name?: string;
  last_name?: string;
  middle_name?: string;
  suffix?: string;
  prefix?: string;
}

interface OrgReceiveDto {
  company?: string; // Name of the contact's company.
  department?: string; // Name of the contact's department.
  title?: string; // Contact's business title.
}

interface PhoneReceiveDto {
  phone?: string; // Automatically populated with the `wa_id` value as a formatted phone number.
  type?: string; // Standard Values are CELL, MAIN, IPHONE, HOME, and WORK.
  wa_id?: string; // WhatsApp ID.
}

interface UrlReceiveDto {
  url?: string; // URL.
  type?: string; // Standard values are HOME and WORK.
}

interface ContactReceiveDto {
  addresses?: AddressReceiveDto;
  birthday?: string; // YYYY-MM-DD formatted string.
  emails?: EmailReceiveDto[];
  name: NameReceiveDto; // At least one of the optional parameters needs to be included along with the formatted_name parameter.
  org?: OrgReceiveDto;
  phones?: PhoneReceiveDto[];
  urls?: UrlReceiveDto[];
}

interface ContextReceiveDto {
  from?: string; // if is reply
  id?: string; // if is reply

  forward?: boolean; // if is forward
}

type TypeReceive =
  | "button"
  | "catalog_message"
  | "list"
  | "product"
  | "product_list"
  | "button_reply"
  | "list_reply";

interface ButtonReplyReceiveDto {
  id: ReplyButtonId;
  title: string;
}

interface ListReplyReceiveDto {
  id: ReplyListId;
  title: string;
  description: string;
}

interface InteractiveReceiveDto {
  type: TypeReceive;
  button_reply?: ButtonReplyReceiveDto; // if is button_reply
  list_reply?: ListReplyReceiveDto; // if is list_reply
}

interface LocationReceiveDto {
  longitude: number;
  latitude: number;
  name?: string;
  address?: string; // Only displayed if name is present.
}

interface MediaDto {
  id?: string; // Not required when type is text. Required when type is audio, document, image, sticker, or video and you are not using a link.
  link?: string; // Not required when type is text. Required when type is audio, document, image, sticker, or video and you are not using an uploaded media ID (i.e. you are hosting the media asset on your public server).
  filename?: string; // only with document media
  provider?: string; // Only used for On-Premises API.
}

interface ReactionReceiveDto {
  /**
   * *The WhatsApp Message ID (wamid) of the message on which the reaction should appear. The reaction will not be sent if:* \
   * The message is older than 30 days \
   * The message is a reaction message \
   * The message has been deleted
   */
  message_id: string;
  /**
   * *Emoji to appear on the message.* \
   * All emojis supported by Android and iOS devices are supported. \
   * Rendered-emojis are supported. \
   * If using emoji unicode values, values must be Java- or JavaScript-escape encoded. \
   * Only one emoji can be sent in a reaction message \
   * Use an empty string to remove a previously sent emoji.
   */
  emoji: string;
}

enum ReplyButtonId {
  YES = "yes",
  NO = "no",
  CANCEL = "cancel",
  OK = "ok",
  NEXT = "next",
  PREVIOUS = "previous",
  DONE = "done",
}

enum ReplyListId {
  TEXT = "text",
  IMAGE = "image",
  VIDEO = "video",
  AUDIO = "audio",
  DOCUMENT = "document",
}

interface StickerReceiveDto {
  mime_type: string;
  sha256: string;
  id: string;
  animated: boolean;
}

/**
 * Negrito = Asterisco ( * ) \
 * Itálico = Sublinhado ( _ ) \
 * Riscado = Til ( ~ ) \
 * Code = Três acentos graves ( ``` )
 */
interface TextReceiveDto {
  body: string; // Maximum length: 4096
}

interface ErrorDataReceiveDto {
  details: string;
}

interface UnsupportedReceiveDto {
  code: number;
  title: string;
  message: string;
  error_data: ErrorDataReceiveDto;
}

interface OriginReceiveDto {
  type: string;
}

interface conversationReceiveDto {
  id: string;
  expiration_timestamp?: string; // Sent messages only.
  origin: OriginReceiveDto;
}

interface PricingReceiveDto {
  billable: boolean;
  pricing_model: string;
  category: string;
}

type StatusReceive = "delivered" | "sent" | "read";

interface StatusReceiveDto {
  id: string;
  status: StatusReceive;
  timestamp: string;
  recipient_id: string;
  conversation?: conversationReceiveDto; // Sent and Delivered messages only.
  pricing?: PricingReceiveDto; // Sent and Delivered messages only.
}

enum MessageReceiveType {
  AUDIO = "audio",
  BUTTON = "button",
  DOCUMENT = "document",
  TEXT = "text",
  IMAGE = "image",
  INTERACTIVE = "interactive",
  ORDER = "order",
  STICKER = "sticker",
  SYSTEM = "system",
  VIDEO = "video",
  LOCATION = "location",
  CONTACTS = "contacts",
  REACTION = "reaction",
  UNSUPPORTED = "unsupported",
}

interface MessageReceiveDto {
  from: string;
  id: string;
  timestamp: string;
  type?: MessageReceiveType; // Obrigatório para modelos de mensagem.

  to: string; // Id
  ttl?: string; // Padrão: 7 dias (1 a 30 dias) somente segundos. As durações devem ser especificadas em exatos múltiplos de dias.

  image?: MediaDto; // if type is image.
  video?: MediaDto; // if type is video.
  audio?: MediaDto; // if type is audio.
  document?: MediaDto; // if type is document.
  location?: LocationReceiveDto; // if type is location.
  reaction?: ReactionReceiveDto; // if type is reaction.
  interactive?: InteractiveReceiveDto; // if type is interactive.
  text?: TextReceiveDto; // if type is text.
  contacts?: ContactReceiveDto[]; // if type is contacts
  sticker?: StickerReceiveDto; // if type is sticker
  errors?: UnsupportedReceiveDto[]; // if type is unsupported
}

interface ProfileReceiveDto {
  name: string;
}

interface ValueContactReceiveDto {
  profile: ProfileReceiveDto;
  wa_id: string;
}

interface MetadataReceiveDto {
  display_phone_number: string;
  phone_number_id: string;
}

interface ValueReceiveDto {
  messaging_product: "whatsapp";
  metadata: MetadataReceiveDto;
  contacts?: ValueContactReceiveDto[];
  messages?: MessageReceiveDto[];
  statuses?: StatusReceiveDto[];
}

interface ChangesReceiveDto {
  field: "messages";
  value: ValueReceiveDto;
}

interface EntryReceiveDto {
  id: string;
  changes: ChangesReceiveDto[];
}

export interface WhatsappReceiveDto {
  object: "whatsapp_business_account";
  entry: EntryReceiveDto[];
}
