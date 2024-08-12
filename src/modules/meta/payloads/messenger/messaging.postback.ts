export class MessengerPostback {
  /* O ID da mensagem. */
  mid: string;

  /* O título da chamada para ação (CTA, pelas iniciais em inglês) em que a pessoa clicou. */
  title: string;

  /* As informações definidas no parâmetro payload da CTA.
    Elas aparecem somente na notificação do webhook do app que enviou a mensagem. */
  payload: string;

  /* As informações sobre a ação realizada para entrar na conversa.
    Em relação à propriedade referral, as informações aparecem na notificação de webhook apenas quando uma pessoa inicia a conversa usando uma destas opções para clicar em uma CTA (como um botão Começar):
    Um plugin de bate-papo
    Um link m.me
    Um anúncio de clique para o Messenger
    Um QR code para o Messenger
    Uma tela de boas-vindas */
  referral?: {
    /* Os dados arbitrários originalmente passados no parâmetro ref adicionado ao link m.me. Só há compatibilidade com caracteres alfanuméricos, bem como -, _ e =. */
    ref: string;

    /* A URL da referência. Para links m.me, o valor de origem é “SHORTLINK”. Para referências em anúncios de conversa do Messenger, o valor de origem é "ADS". */
    source: string;

    /* O identificador da referência. Para a referência de links m.me, o valor será sempre "OPEN_THREAD". */
    type: string;
  };
}
