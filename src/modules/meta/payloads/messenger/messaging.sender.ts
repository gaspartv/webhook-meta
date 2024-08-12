export class MessengerSender {
  /* O PSID (Número de identificação no escopo da Página) do usuário que acionou o evento de webhook. */
  id: string;

  /* O parâmetro user_ref do usuário que acionou o evento de webhook.
  Disponível somente para o evento de webhook do plugin de bate-papo. */
  user_ref?: string;
}
