export class MessengerGamePlay {
  /* The Meta app ID for the game */
  game_id: string;

  /* The ID for the player in the Instant Game namespace. */
  player_id: string;

  /* The locale for the player */
  locale: string;

  /* The social context of the game; GROUP, SOLO, THREAD */
  context_type: "GROUP" | "SOLO" | "THREAD";

  /* The ID for the social context type if the type is not SOLO. This ID is in the Instant Game namespace. */
  context_id: string;

  /* The best score achieved by this playing during this round of game play.
    Only available to Classic score based games. */
  score: number;

  /* The JSON encoded object, set using FBInstant.setSessionData().
    Only available for Rich Games */
  payload: any;
}
