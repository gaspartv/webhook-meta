import { MessengerMessage } from "./messenger-message";
import { MessengerRecipient } from "./messenger-recipient";

type NotificationType = "NO_PUSH" | "REGULAR " | "SILENT_PUSH";

type MessagingType = "RESPONSE" | "UPDATE" | "MESSAGE_TAG";

type SenderActionType = "typing_on" | "typing_off" | "mark_seen";

type TagType =
  | "ACCOUNT_UPDATE"
  | "CONFIRMED_EVENT_UPDATE"
  | "CUSTOMER_FEEDBACK"
  | "HUMAN_AGENT"
  | "POST_PURCHASE_UPDATE";

export class SentMetaMessengerDto {
  /* A pessoa que receberá a mensagem sendo enviada. */
  recipient: MessengerRecipient;

  /* O ícone de ação exibido na janela de mensagens que representa a ação realizada pela Página em uma mensagem que ela recebeu.
  typing_on: exibe o balão de status da digitação enquanto a Página prepara uma resposta.
  typing_off: não exibe o balão.
  mark_seen: exibe o ícone que indica que a mensagem foi vista pela Página.
  Pode ser enviado somente com o parâmetro recipient.
  Não pode ser enviado com o parâmetro message, que deve ser enviado em uma solicitação separada. */
  sender_action?: SenderActionType;

  /* Uma tag que permite à Página enviar uma mensagem a alguém fora da janela-padrão de 24 horas.
  ? ACCOUNT_UPDATE:
    marca a mensagem sendo enviada ao cliente como uma atualização não recorrente do app ou da conta. Veja os usos permitidos.
    Indisponível para a API de Mensagens do Instagram.

  ? CONFIRMED_EVENT_UPDATE:
    marca a mensagem sendo enviada ao cliente como um lembrete de um evento próximo ou uma atualização
    sobre um evento em andamento no qual ele está inscrito. Veja os usos permitidos.
    Indisponível para a API de Mensagens do Instagram.

  ? CUSTOMER_FEEDBACK:
    marca a mensagem sendo enviada ao cliente como uma pesquisa de feedback.
    As mensagens de feedback podem ser enviadas no máximo 7 dias depois da última mensagem do cliente. Veja os usos permitidos.
    Indisponível para a API de Mensagens do Instagram.

  ? HUMAN_AGENT:
    obrigatório para a API de Mensagens do Instagram.
    Quando essa tag é adicionada, um agente humano pode enviar uma resposta à mensagem da pessoa.
    A resposta pode ser enviada no máximo 7 dias depois dessa mensagem.
    O suporte prestado por agentes humanos é voltado à resolução de problemas que não podem ser solucionados dentro da janela-padrão de mensagens.
    Veja os usos permitidos.
    Os apps precisam se inscrever para obter a permissão Human Agent via Painel de Apps do desenvolvedor.
    Acesse Painel de Apps -> Análise do app -> Permissões e recursos -> Human Agent.
    Os apps que já têm aprovação para o acesso beta à permissão Human Agent não precisam se inscrever novamente.
    A permissão Human Agent não está disponível no acesso padrão nem no modo de desenvolvimento.
    Será preciso concluir o processo de análise do app antes de usar a marcação de agente humano.
    Ao enviar o app para análise, forneça instruções claras e uma demonstração de como você pretende usar a marcação de agente humano nas suas experiências.

  ? POST_PURCHASE_UPDATE:
    marca a mensagem sendo enviada ao cliente como uma atualização sobre uma compra recente. Veja os usos permitidos.
    Indisponível para a API de Mensagens do Instagram. */
  // * Caso utilize a tag ler o arquivo tags.txt
  tag?: TagType;

  /* O tipo de mensagem sendo enviada.
  RESPONSE: uma resposta a uma mensagem recebida.
    Isso inclui mensagens promocionais e não promocionais enviadas dentro da janela-padrão de mensagens de 24 horas.
    Por exemplo, use essa tag para responder se uma pessoa pedir uma confirmação de reserva ou uma atualização de status.
  UPDATE: a mensagem está sendo enviada proativamente e não ocorre em resposta a uma mensagem recebida.
    Isso inclui mensagens promocionais e não promocionais enviadas dentro da janela-padrão de mensagens de 24 horas.
  MESSAGE_TAG: a mensagem não é promocional e está sendo enviada fora da janela-padrão de mensagens de 24 horas com uma tag de mensagem.
    A mensagem deve corresponder ao caso de uso permitido da tag. */
  messaging_type?: MessagingType;

  /* O tipo de notificação push que uma pessoa receberá.
  NO_PUSH: sem notificação.
  REGULAR (padrão): som ou vibração quando uma mensagem é recebida.
  SILENT_PUSH: apenas notificação na tela. */
  notification_type?: NotificationType;

  /* O tipo de mensagem sendo enviada pela Página.
  É preciso definir "text" ou "attachement" ao usar esse parâmetro.
  Objeto attachment: mostra uma prévia da URL.
  Usado para enviar mensagens estruturadas ou com mídia.
  É necessário definir text ou attachment.
  type: tipo de anexo.
  Pode ser audio, file, image, template ou video.
  O tamanho máximo do arquivo é 25 MB.
  payload: um objeto que contenha um conteúdo de modelo ou de arquivo.
  metadata: uma string com dados adicionais a serem passados no webhook message_echo.
  Precisa ter menos de 1.000 caracteres.
  quick_replies: uma matriz com respostas rápidas a serem enviadas na mensagem.
  text: uma mensagem que contenha somente texto.
  O texto deve estar em UTF-8 e ter menos de 2.000 caracteres. */
  message: MessengerMessage;
}
