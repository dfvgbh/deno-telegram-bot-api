/**
 * Type definitions for objects from "Games" section in official API docs
 * @see https://core.telegram.org/bots/api#games
 */

import {
  Animation,
  MessageEntity,
  PhotoSize,
  User,
} from "../common/objects.ts";

/**
 * @see https://core.telegram.org/bots/api#game
 */
export interface Game {
  title: string;
  description: string;
  photo: PhotoSize[];
  text?: string;
  text_entities?: MessageEntity[];
  animation?: Animation;
}

/**
 * @see https://core.telegram.org/bots/api#callbackgame
 */
export type CallbackGame = never;

/**
 * @see https://core.telegram.org/bots/api#gamehighscore
 */
export interface GameHighScore {
  position: number;
  user: User;
  score: number;
}
