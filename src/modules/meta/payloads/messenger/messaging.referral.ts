export class MessengerReferral {
  /* A origem da referência. Valores compatíveis:
    - ADS
    - SHORTLINK
    - CUSTOMER_CHAT_PLUGIN */
  source: "ADS" | "SHORTLINK" | "CUSTOMER_CHAT_PLUGIN";

  /* O tipo de referência. Atualmente, é compatível com OPEN_THREAD. */
  type: string;

  /* O atributo ref opcional definido no referenciador. Só há compatibilidade com caracteres alfanuméricos, assim como -, _ e =. */
  ref: string;

  /* O URI do site onde a mensagem foi enviada no plugin de bate-papo do Facebook. */
  referer_uri: string;

  /* Uma sinalização que indica se o usuário é um convidado do plugin de bate-papo do Facebook. */
  is_guest_user: string;

  /* Dados com informações sobre o anúncio de CTM a partir do qual o usuário iniciou o tópico.  }; */
  ads_context_data: {
    /* Title of the Ad. */
    ad_title: string;

    /* [Optional] Url of the image from the Ad the user is interested. */
    photo_url?: string;

    /* [Optional] Thumbnail url of the the video from the ad. */
    video_url?: string;

    /* ID of the post. */
    post_id: string;

    /* [Optional] Product ID from the Ad the user is interested. */
    product_id?: string;
  };
}
