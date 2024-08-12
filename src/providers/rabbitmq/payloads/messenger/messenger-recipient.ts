export class MessengerRecipient {
  /* o ID no escopo da Página para a pessoa cuja mensagem recebida nas últimas 24 horas
    será respondida ou para a pessoa que aceitou receber mensagens da Página fora da janela-padrão de 24 horas. */
  id: string;

  /* a referência da pessoa usada para enviar uma mensagem em resposta a uma caixa de seleção ou um plugin de bate-papo do cliente. */
  user_ref?: string;

  /* o ID do comentário usado para enviar uma mensagem em resposta privada a um comentário de visitante em uma publicação da Página. */
  comment_id?: string;

  /* o ID da publicação da Página usada para enviar uma mensagem em resposta privada a uma publicação de um visitante na Página.  */
  post_id?: string;
}
