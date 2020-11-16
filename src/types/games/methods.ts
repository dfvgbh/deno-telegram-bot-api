/**
 * Type definitions for methods from "Games" section in official API docs
 * @see https://core.telegram.org/bots/api#games
 */

import { InlineKeyboardMarkup, Message } from "../common/objects.ts";
import { GameHighScore } from "./objects.ts";

/**
 * @see https://core.telegram.org/bots/api#sendgame
 */
export type SendGame = (params: {
  chat_id: number;
  game_short_name: string;
  disable_notification?: boolean;
  reply_to_message_id?: number;
  allow_sending_without_reply?: boolean;
  reply_markup?: InlineKeyboardMarkup;
}) => Promise<Message>;

/**
 * @see https://core.telegram.org/bots/api#setgamescore
 */
export type SetGameScore = (params: {
  user_id: number;
  score: number;
  force?: boolean;
  disable_edit_message?: boolean;
  chat_id?: number;
  message_id?: number;
  inline_message_id?: string;
}) => Promise<Message | true>;

/**
 * @see https://core.telegram.org/bots/api#getgamehighscores
 */
export type GetGameHighScores = (params: {
  user_id: number;
  chat_id?: number;
  message_id?: number;
  inline_message_id?: string;
}) => Promise<GameHighScore[]>;
