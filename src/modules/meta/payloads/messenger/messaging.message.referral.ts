export class MessengerMessageReferral {
  /* Informações do produto. */
  product?: {
    /* ID do produto */
    id: string;
  };

  /* O atributo ref opcional definido no referenciador.
  Apenas caracteres alfanuméricos e -, _ e = são compatíveis. */
  ref: string;

  /* Identificação do anúncio do Gerenciador de Anúncios. */
  ad_id: string;

  /* A origem da referência.
  Valores compatíveis: ADS (apenas para referências de anúncios). */
  source: string;

  /* O tipo de referência.
  Atualmente, é compatível com OPEN_THREAD. */
  type: string;

  /* Dados de contexto de anúncio do Gerenciador de Anúncios. */
  ads_context_data: {
    /* Título do anúncio no Gerenciador de Anúncios */
    ad_title: string;

    /* URL da imagem do anúncio (opcional). */
    photo_url?: string;

    /* URL da miniatura do vídeo do anúncio (opcional). */
    video_url?: string;

    /* Identificação da publicação de anúncio no Gerenciador de Anúncios. */
    post_id: string;

    /* Identificação do produto do anúncio (opcional). */
    product_id?: string;
  };
}
