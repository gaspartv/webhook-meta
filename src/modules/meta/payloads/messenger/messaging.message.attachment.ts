export class MessengerAttachment {
  /* audio, file, image, video, fallback, reel ou ig_reel */
  type:
    | "template"
    | "audio"
    | "file"
    | "image"
    | "video"
    | "fallback"
    | "reel"
    | "ig_reel";

  payload: {
    /* URL do tipo de anexo.
    Aplicável aos tipos de anexo: audio, file, image, video, fallback, reel, ig_reel */
    url: string;

    /* Título do anexo.
    Aplicável aos tipos de anexo: fallback, reel e ig_reel */
    title: string;

    /* A identificação persistente da figurinha
    por exemplo, 369239263222822 para a figurinha Curtir.
    Aplicável ao tipo de anexo image se uma figurinha for enviada. */
    sticker_id?: number;

    /* ID do vídeo associado ao reel anexado. Aplicável aos tipos de anexo: reel e ig_reel */
    reel_video_id?: number;
  };
}
