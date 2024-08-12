import { MessengerAttachment } from "./messaging.message.attachment";
import { MessengerCommands } from "./messaging.message.command";
import { MessengerQuickReply } from "./messaging.message.quick-reply";
import { MessengerMessageReferral } from "./messaging.message.referral";
import { MessengerReplyTo } from "./messaging.message.reply-to";

export class MessengerMessage {
  /* ID da mensagem. */
  mid: string;

  /* Texto da mensagem. */
  text: string;

  /* Dados personalizados opcionais fornecidos pelo app remetente. */
  quick_reply?: MessengerQuickReply;

  /* Referência ao ID da mensagem (mid) sendo respondida. */
  reply_to?: MessengerReplyTo;

  /* Matriz com os dados de anexo. */
  attachments?: MessengerAttachment[];

  /* Referência da mensagem da página de detalhes sobre o produto em Lojas. */
  referral?: MessengerMessageReferral;

  commands: MessengerCommands[];

  /* ID do app do qual a mensagem foi enviada.
  A partir da v12.0 da Graph API, o campo app_id retornará o ID do app de caixa de entrada da Página do Facebook (26390203743090)
  sempre que a mensagem for enviada por essa via. */
  app_id?: string;

  /* Indica a mensagem enviada diretamente da página. */
  is_echo?: boolean;

  /* Uma string personalizada transmitida para a Send API como o campo metadata.
  Presente somente se a propriedade metadata estiver definida na mensagem original. */
  metadata?: string;
}
