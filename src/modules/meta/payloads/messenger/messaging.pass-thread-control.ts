export class MessengerPassThreadControl {
  /* App ID that thread control is passed from. */
  previous_owner_app_id: string;

  /* App ID that thread control is passed to. */
  new_owner_app_id: string;

  /* Custom string specified in the API request. */
  metadata: string;
}
