interface ReadDto {
  mid: string; // Message ID
}

interface QuickReply {
  payload: string; // Dados personalizados fornecidos pelo aplicativo
}

interface Payload {
  url?: string; // URL do tipo de anexo. Aplicável aos tipos de anexo audio, file, image, video e fallback.
  title?: string; // Título do anexo. Aplicável ao tipo de anexo fallback.
  sticker_id?: number; // A identificação persistente da figurinha (por exemplo, 369239263222822 para a figurinha Curtir). Aplicável ao tipo de anexo image se uma figurinha for enviada.
}

interface Attachment {
  type: string; // Tipo de anexo, que pode ser image, audio, video, file ou location
  payload: Payload; // Dados do anexo
}

interface Story {
  url: string;
  id: string;
}

interface ReplyTo {
  mid?: string; // ID da mensagem sendo respondida
  story?: Story;
}

interface Product {
  id: string; // ID do produto
}

interface AdsContextData {
  ad_title: string;
  photo_url: string;
  video_url: string;
}

interface Referral {
  product?: Product; // Informações do produto

  ref?: string; // if ADS
  ad_id?: string; // if ADS
  source?: string; // if ADS
  type?: string; // if ADS
  ads_context_data?: AdsContextData; // if ADS
}

interface MessageDto {
  mid: string; // ID da mensagem
  text?: string; // Texto da mensagem
  quick_reply?: QuickReply;
  reply_to?: ReplyTo; // Referência ao ID da mensagem (mid) sendo respondida
  attachments?: Attachment[]; // Anexos da mensagem
  referral?: Referral; // Referência da mensagem da página de detalhes sobre o produto em Lojas

  is_deleted?: true; // Included when a customer deletes a message
  is_echo?: true; // Included when your business sends a message to the customer
  is_unsupported?: true; // Included when a customer sends a message with unsupported media
}

enum EventObject {
  PAGE = "page",
  INSTAGRAM = "instagram",
}

interface MessagingSender {
  id: string;
  user_ref?: string; // O parâmetro user_ref do usuário que acionou o evento de webhook. Disponível somente para o evento de webhook do plugin de bate-papo.
}

interface MessagingRecipient {
  id: string;
}

interface Messaging {
  sender: MessagingSender;
  recipient: MessagingRecipient;
  timestamp: number; // message_echoes

  message?: MessageDto; // messages
  read?: ReadDto; // message_reads
}

interface Entry {
  id: string; // Page ID of page
  time: number; // Time of update (epoch time in milliseconds)
  messaging?: Messaging[]; // Array containing one messaging object. Note that even though this is an array, it will only contain one messaging object.
}

export interface InstagramReceivedDto {
  object: EventObject; // Value will be page
  entry: Entry[]; // Array containing event data
}
