/**
 * Type definitions for objects from "Stickers" section in official API docs
 * @see https://core.telegram.org/bots/api#stickers
 */

import { PhotoSize } from "../common/objects.ts";

/**
 * @see https://core.telegram.org/bots/api#sticker
 */
export interface Sticker {
  file_id: string;
  file_unique_id: string;
  width: number;
  height: number;
  is_animated: boolean;
  thumb?: PhotoSize;
  emoji?: string;
  set_name?: string;
  mask_position?: MaskPosition;
  file_size?: number;
}

/**
 * @see https://core.telegram.org/bots/api#stickerset
 */
export interface StickerSet {
  name: string;
  title: string;
  is_animated: boolean;
  contains_masks: boolean;
  stickers: Sticker[];
  thumb?: PhotoSize;
}

/**
 * @see https://core.telegram.org/bots/api#maskposition
 */
export interface MaskPosition {
  point: string;
  x_shift: number;
  y_shift: number;
  scale: number;
}
