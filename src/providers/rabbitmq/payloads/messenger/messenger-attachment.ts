import { ButtonUrl, MessengerButtons } from "./messenger-buttons";

export class MessengerAttachment {
  /* tipo de anexo. Pode ser audio, file, image, template ou video.
  O tamanho máximo do arquivo é 25 MB. */
  type: "template" | "audio" | "file" | "image" | "video";

  /* um objeto que contenha um conteúdo de modelo ou de arquivo. */
  payload: MessengerAttachmentPayload;
}

type MessengerAttachmentPayload =
  | AttachmentPayloadGeneric
  | AttachmentPayloadButton
  | AttachmentPayloadMedia
  | AttachmentPayloadReceipt;

class ElementGeneric {
  /* O título a ser exibido no modelo.
  Limite de 80 caracteres. */
  title: string;

  /* Opcional.
  O subtítulo a ser exibido no modelo.
  Limite de 80 caracteres. */
  subtitle?: string;

  /* Opcional.
  A URL da imagem a ser exibida no modelo. */
  image_url?: string;

  /* Opcional.
  A ação padrão executada quando o template é tocado.
  Aceita as mesmas propriedades do botão URL, exceto o título. */
  default_action?: ButtonUrl;

  /* Opcional.
  Uma matriz de botões para anexar ao modelo.
  Um máximo de 3 botões por elemento é suportado. */
  buttons?: MessengerButtons[];
}

class ElementMedia {
  /* O tipo de mídia que está sendo enviada - imagem ou vídeo - é suportado. */
  media_type: "image" | "video";

  /* O ID do anexo da imagem ou vídeo.
  Não pode ser usado se url estiver definido. */
  attachment_id?: string;

  /* A URL da imagem.
  Não pode ser usada se attachment_id estiver definido. */
  url?: string;

  /* Um array de objetos de botão a serem anexados ao template.
  Um máximo de 3 botões é suportado. */
  buttons: MessengerButtons[];
}

class AttachmentPayloadGeneric {
  /* Valor que indica o tipo de modelo genérico, botão, mídia, recibo, etc. */
  template_type: "generic";

  /* Um array contendo 1 objeto element que descreve a mídia na mensagem.
  Um máximo de 1 elemento é suportado. */
  elements: ElementGeneric[];

  /* Opcional.
  Defina como true para habilitar o botão de compartilhamento nativo no Messenger para a mensagem de modelo.
  O padrão é false. */
  sharable?: boolean;
}

class AttachmentPayloadButton {
  /* O valor deve ser botão */
  template_type: "button";

  /* Texto codificado em UTF-8 de até 640 caracteres.
  O texto aparecerá acima dos botões. */
  text: string;

  /* Conjunto de 1 a 3 botões que aparecem como chamadas para ações. */
  buttons: MessengerButtons[];
}

class AttachmentPayloadMedia {
  /* Valor deve ser mídia */
  template_type: "media";

  /* Um array contendo 1 objeto element que descreve a mídia na mensagem.
  Um máximo de 1 elemento é suportado. */
  elements: ElementMedia[];

  /* Opcional.
  Defina como true para habilitar o botão de compartilhamento nativo no Messenger para a mensagem de modelo.
  O padrão é false. */
  sharable?: boolean;
}

class AttachmentPayloadReceipt {
  /* Value must be .receipt */
  template_type: string;

  /* Optional.
  Set to to enable the native share button in Messenger for the template message. */
  sharable?: boolean;

  /* The recipient's name. */
  recipient_name: string;

  /* Optional. The merchant's name. If present this is shown as logo text. */
  merchant_name?: string;

  /* The order number. Must be unique. */
  order_number?: number;

  /* The currency of the payment. */
  currency: string;

  /* The payment method used.
  Providing enough information for the customer to decipher which payment method and account they used is recommended.
  This can be a custom string, such as, "Visa 1234". */
  payment_method: string;

  /* Optional.
  Timestamp of the order in seconds. */
  timestamp?: string;

  /* Optional.
  Array of a maximum of 100 element objects that describe items in the order.
  Sort order of the elements is not guaranteed. */
  elements?: {
    /* The name to display for the item. */
    title: string;

    /* Optional. The subtitle for the item, usually a brief item description. */
    subtitle?: string;

    /* Optional. The quantity of the item purchased. */
    quantity?: number;

    /* The price of the item. For free items, '0' is allowed. */
    price: number;

    /* Optional. The currency of the item price. */
    currency?: string;

    /* Optional. The URL of an image to be displayed with the item. */
    image_url?: string;
  }[];

  /* Optional. The shipping address of the order. */
  address?: {
    /* The street address, line 1. */
    street_1: string;

    /* Optional. The street address, line 2. */
    street_2?: string;

    /* The city name of the address. */
    city: string;

    /* The postal code of the address. */
    postal_code: string;

    /* The state abbreviation for U.S. addresses, or the region/province for non-U.S. addresses. */
    state: string;

    /* The two-letter country abbreviation of the address. */
    country: string;
  };

  /* The payment summary. See summary. */
  summary: {
    /* Optional. The sub-total of the order. */
    subtotal?: number;

    /* Optional. The shipping cost of the order. */
    shipping_cost?: number;

    /* Optional. The tax of the order. */
    total_tax?: number;

    /* The total cost of the order, including sub-total, shipping, and tax. */
    total_cost: number;
  };

  /* Optional. An array of payment objects that describe payment adjustments, such as discounts. */
  adjustments: {
    /* Required if the array is set. Name of the adjustment.adjustments */
    name?: string;

    /* Required if the array is set. The amount of the adjustment.adjustments */
    amount: number;
  }[];
}
