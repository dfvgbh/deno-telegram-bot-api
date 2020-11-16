/**
 * Type definitions for methods from "Updating messages" section in official API docs
 * @see https://core.telegram.org/bots/api#updating-messages
 */

import {
  InlineKeyboardMarkup,
  InputMedia,
  Message,
  MessageEntity,
  Poll,
} from "../common/objects.ts";
import { Attachments } from "../utils.ts";

/**
 * @see https://core.telegram.org/bots/api#editmessagetext
 */
export type EditMessageText = (params: {
  chat_id?: number | string;
  message_id?: number;
  inline_message_id?: string;
  text: string;
  parse_mode?: string;
  entities?: MessageEntity[];
  disable_web_page_preview?: boolean;
  reply_markup?: InlineKeyboardMarkup;
}) => Promise<true>;

/**
 * @see https://core.telegram.org/bots/api#editmessagecaption
 */
export type EditMessageCaption = (params: {
  chat_id?: number | string;
  message_id?: number;
  inline_message_id?: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
}) => Promise<true>;

/**
 * @see https://core.telegram.org/bots/api#editmessagemedia
 */
export type EditMessageMedia = (
  params: FormData | {
    chat_id?: number | string;
    message_id?: number;
    inline_message_id?: string;
    media: InputMedia;
    reply_markup?: InlineKeyboardMarkup;
    attachments?: Attachments;
  },
) => Promise<Message | true>;

/**
 * @see https://core.telegram.org/bots/api#editmessagereplymarkup
 */
export type EditMessageReplyMarkup = (params: {
  chat_id?: number | string;
  message_id?: number;
  inline_message_id?: string;
  reply_markup?: InlineKeyboardMarkup;
}) => Promise<Message | true>;

/**
 * @see https://core.telegram.org/bots/api#stoppoll
 */
export type StopPoll = (params: {
  chat_id: number | string;
  message_id: number;
  reply_markup?: InlineKeyboardMarkup;
}) => Promise<Poll>;

/**
 * @see https://core.telegram.org/bots/api#deletemessage
 */
export type DeleteMessage = (params: {
  chat_id: number | string;
  message_id: number;
}) => Promise<true>;
