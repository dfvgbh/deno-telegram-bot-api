/**
 * Type definitions for objects from "Getting updates" section in official API docs
 * @see https://core.telegram.org/bots/api#getting-updates
 */

import {
  CallbackQueryUpdate,
  ChannelPostUpdate,
  ChosenInlineResultUpdate,
  EditedChannelPostUpdate,
  EditedMessageUpdate,
  InlineQueryUpdate,
  MessageUpdate,
  PollAnswerUpdate,
  PollUpdate,
  PreCheckoutQueryUpdate,
  ShippingQueryUpdate,
} from "./update-helpers.ts";

/**
 * @see https://core.telegram.org/bots/api#update
 */
export type Update =
  | MessageUpdate
  | EditedMessageUpdate
  | ChannelPostUpdate
  | EditedChannelPostUpdate
  | InlineQueryUpdate
  | ChosenInlineResultUpdate
  | CallbackQueryUpdate
  | ShippingQueryUpdate
  | PreCheckoutQueryUpdate
  | PollUpdate
  | PollAnswerUpdate;

/**
 * @see https://core.telegram.org/bots/api#webhookinfo
 */
export interface WebhookInfo {
  url: string;
  has_custom_certificate: boolean;
  pending_update_count: number;
  ip_address?: string;
  last_error_date?: number;
  last_error_message?: string;
  max_connections?: number;
  allowed_updates?: string[];
}
