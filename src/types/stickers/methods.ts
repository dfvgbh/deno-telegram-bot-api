/**
 * Type definitions for methods from "Stickers" section in official API docs
 * @see https://core.telegram.org/bots/api#stickers
 */

import {
  File,
  ForceReply,
  InlineKeyboardMarkup,
  InputFile,
  Message,
  ReplyKeyboardMarkup,
  ReplyKeyboardRemove,
} from "../common/objects.ts";
import { MaskPosition, StickerSet } from "./objects.ts";

/**
 * @see https://core.telegram.org/bots/api#sendsticker
 */
export type SendSticker = (
  params: FormData | {
    chat_id: number | string;
    sticker: InputFile | string;
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?:
      | InlineKeyboardMarkup
      | ReplyKeyboardMarkup
      | ReplyKeyboardRemove
      | ForceReply;
  },
) => Promise<Message>;

/**
 * @see https://core.telegram.org/bots/api#getstickerset
 */
export type GetStickerSet = (params: {
  name: string;
}) => Promise<StickerSet>;

/**
 * @see https://core.telegram.org/bots/api#uploadstickerfile
 */
export type UploadStickerFile = (
  params: FormData | {
    user_id: number;
    png_sticker: InputFile;
  },
) => Promise<File>;

/**
 * @see https://core.telegram.org/bots/api#createnewstickerset
 */
export type CreateNewStickerSet = (
  params: FormData | {
    user_id: number;
    name: string;
    title: string;
    png_sticker?: InputFile | string;
    tgs_sticker?: InputFile;
    emojis: string;
    contains_masks?: boolean;
    mask_position?: MaskPosition;
  },
) => Promise<true>;

/**
 * @see https://core.telegram.org/bots/api#addstickertoset
 */
export type AddStickerToSet = (
  params: FormData | {
    user_id: number;
    name: string;
    png_sticker?: InputFile | string;
    tgs_sticker?: InputFile;
    emojis: string;
    mask_position?: MaskPosition;
  },
) => Promise<true>;

/**
 * @see https://core.telegram.org/bots/api#setstickerpositioninset
 */
export type SetStickerPositionInSet = (params: {
  sticker: string;
  position: number;
}) => Promise<true>;

/**
 * @see https://core.telegram.org/bots/api#deletestickerfromset
 */
export type DeleteStickerFromSet = (params: {
  sticker: string;
}) => Promise<true>;

/**
 * @see https://core.telegram.org/bots/api#setstickersetthumb
 */
export type SetStickerSetThumb = (
  params: FormData | {
    name: string;
    user_id: number;
    thumb?: InputFile | string;
  },
) => Promise<true>;
