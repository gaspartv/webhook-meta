import { MessengerAccountLinking } from "./messaging.account-linking";
import { MessengerDelivery } from "./messaging.delivery";
import { MessengerGamePlay } from "./messaging.game-play";
import { MessengerMessage } from "./messaging.message";
import { MessengerOption } from "./messaging.option";
import { MessengerPassThreadControl } from "./messaging.pass-thread-control";
import { MessengerPolicyEnforcement } from "./messaging.policy-enforcement";
import { MessengerPostback } from "./messaging.postback";
import { MessengerRead } from "./messaging.read";
import { MessengerRecipient } from "./messaging.recipient";
import { MessengerReferral } from "./messaging.referral";
import { MessengerSender } from "./messaging.sender";

export class MessengerMessaging {
  sender: MessengerSender;
  recipient: MessengerRecipient;
  timestamp: number;
  message?: MessengerMessage;
  account_linking?: MessengerAccountLinking;
  delivery?: MessengerDelivery;
  game_play?: MessengerGamePlay;
  pass_thread_control?: MessengerPassThreadControl;
  option?: MessengerOption;
  policy_enforcement?: MessengerPolicyEnforcement;
  postback?: MessengerPostback;
  read?: MessengerRead;
  referral?: MessengerReferral;
}
