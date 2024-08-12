export class MessengerPolicyEnforcement {
  /* action will be either , or warningblockunblock */
  action: string;

  /* The reason for being warned or blocked. This field is absent if is actionunblock */
  reason: string;
}
