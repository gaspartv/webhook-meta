export class MessengerAccountLinking {
  /* linked or unlinked */
  status: "linked" | "unlinked";

  /* Value of pass-through authorization_code provided in the Account Linking flow */
  authorization_code?: string;
}
