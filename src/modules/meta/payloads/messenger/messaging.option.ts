export class MessengerOption {
  /* Value must be notification_messages */
  type: "notification_messages";

  /* Additional information that you want to include in the webhooks notification */
  payload: string;

  /* The token that represents the person who opted in, with the specific topic and message frequency, that is used to send Marketing Messages */
  notification_messages_token: "NOTIFICATION-MESSAGES-TOKEN";

  /* The value can be one of the following:
    DAILY - send 1 notification per 24 hour period for 6 months from opt in date
    WEEKLY - send 1 notification per week for 9 months from the opt in date
    MONTHLY - send 1 notification per month for 12 months from the opt in date
    (Removed in API v16) */
  notification_messages_frequency: "DAILY" | "WEEKLY" | "MONTHLY";

  /* Timezone for the person receiving the message */
  notification_messages_timezone: "TIMEZONE-ID";

  /* Date when the the notification message token expires */
  token_expiry_timestamp: number;

  /* The value can be one of the following:
    REFRESHED - This is set when the user chooses to re opt-in to receiving Marketing Messages after the token has expired
    NOT_REFRESHED - Default value and is set when the user does not re opt-in to receiving Marketing Messages after the token has expired */
  user_token_status: "REFRESHED-STATUS" | "NOT_REFRESHED";

  /* This field is present only when the user stops or resumes Marketing Messages.
    The value can be one of the following:
    STOP NOTIFICATIONS - User has clicked "Stop these messages"
    RESUME NOTIFICATIONS - User has clicked "Resume these messages" */
  notification_messages_status: "STOP NOTIFICATIONS" | "RESUME NOTIFICATIONS";

  /* The title displayed in the template */
  title: string;
}
