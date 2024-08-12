import { GenericReceivedDto } from "../generic-received";
import { MessengerMessaging } from "./messaging";

class Entry {
  id: string; // Page ID of page
  time: number; // Time of update (epoch time in milliseconds)
  messaging?: MessengerMessaging[]; // Array containing one messaging object. Note that even though this is an array, it will only contain one messaging object.
  standby?: MessengerMessaging[];
}

export class MessengerReceivedDto extends GenericReceivedDto {
  entry: Entry[];
}
