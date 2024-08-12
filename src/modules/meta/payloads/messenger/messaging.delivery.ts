export class MessengerDelivery {
  /* Array containing message IDs of messages that were delivered.
  Field may not be present. */
  mids: string[];

  /* All messages that were sent before this timestamp were delivered */
  watermark: number;
}
