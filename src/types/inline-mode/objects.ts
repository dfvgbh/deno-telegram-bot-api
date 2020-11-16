/**
 * Type definitions for objects from "Inline mode" section in official API docs
 * @see https://core.telegram.org/bots/api#inline-mode
 */

import {
  InlineKeyboardMarkup,
  Location,
  MessageEntity,
  User,
} from "../common/objects.ts";

/**
 * @see https://core.telegram.org/bots/api#inlinequery
 */
export interface InlineQuery {
  id: string;
  from: User;
  location?: Location;
  query: string;
  offset: string;
}

/**
 * @see https://core.telegram.org/bots/api#inlinequeryresult
 */
export type InlineQueryResult =
  | InlineQueryResultCachedAudio
  | InlineQueryResultCachedDocument
  | InlineQueryResultCachedGif
  | InlineQueryResultCachedMpeg4Gif
  | InlineQueryResultCachedPhoto
  | InlineQueryResultCachedSticker
  | InlineQueryResultCachedVideo
  | InlineQueryResultCachedVoice
  | InlineQueryResultArticle
  | InlineQueryResultAudio
  | InlineQueryResultContact
  | InlineQueryResultGame
  | InlineQueryResultDocument
  | InlineQueryResultGif
  | InlineQueryResultLocation
  | InlineQueryResultMpeg4Gif
  | InlineQueryResultPhoto
  | InlineQueryResultVenue
  | InlineQueryResultVideo
  | InlineQueryResultVoice;

/**
 * @see https://core.telegram.org/bots/api#inlinequeryresultarticle
 */
export interface InlineQueryResultArticle {
  type: string;
  id: string;
  title: string;
  input_message_content: InputMessageContent;
  reply_markup?: InlineKeyboardMarkup;
  url?: string;
  hide_url?: boolean;
  description?: string;
  thumb_url?: string;
  thumb_width?: number;
  thumb_height?: number;
}

/**
 * @see https://core.telegram.org/bots/api#inlinequeryresultphoto
 */
export interface InlineQueryResultPhoto {
  type: string;
  id: string;
  photo_url: string;
  thumb_url: string;
  photo_width?: number;
  photo_height?: number;
  title?: string;
  description?: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

/**
 * @see https://core.telegram.org/bots/api#inlinequeryresultgif
 */
export interface InlineQueryResultGif {
  type: string;
  id: string;
  gif_url: string;
  gif_width?: number;
  gif_height?: number;
  gif_duration?: number;
  thumb_url: string;
  thumb_mime_type?: string;
  title?: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

/**
 * @see https://core.telegram.org/bots/api#inlinequeryresultmpeg4gif
 */
export interface InlineQueryResultMpeg4Gif {
  type: string;
  id: string;
  mpeg4_url: string;
  mpeg4_width?: number;
  mpeg4_height?: number;
  mpeg4_duration?: number;
  thumb_url: string;
  thumb_mime_type?: string;
  title?: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

/**
 * @see https://core.telegram.org/bots/api#inlinequeryresultvideo
 */
export interface InlineQueryResultVideo {
  type: string;
  id: string;
  video_url: string;
  mime_type: string;
  thumb_url: string;
  title: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  video_width?: number;
  video_height?: number;
  video_duration?: number;
  description?: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

/**
 * @see https://core.telegram.org/bots/api#inlinequeryresultaudio
 */
export interface InlineQueryResultAudio {
  type: string;
  id: string;
  audio_url: string;
  title: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  performer?: string;
  audio_duration?: number;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

/**
 * @see https://core.telegram.org/bots/api#inlinequeryresultvoice
 */
export interface InlineQueryResultVoice {
  type: string;
  id: string;
  voice_url: string;
  title: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  voice_duration?: number;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

/**
 * @see https://core.telegram.org/bots/api#inlinequeryresultdocument
 */
export interface InlineQueryResultDocument {
  type: string;
  id: string;
  title: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  document_url: string;
  mime_type: string;
  description?: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
  thumb_url?: string;
  thumb_width?: number;
  thumb_height?: number;
}

/**
 * @see https://core.telegram.org/bots/api#inlinequeryresultlocation
 */
export interface InlineQueryResultLocation {
  type: string;
  id: string;
  latitude: number;
  longitude: number;
  title: string;
  horizontal_accuracy?: number;
  live_period?: number;
  heading?: number;
  proximity_alert_radius?: number;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
  thumb_url?: string;
  thumb_width?: number;
  thumb_height?: number;
}

/**
 * @see https://core.telegram.org/bots/api#inlinequeryresultvenue
 */
export interface InlineQueryResultVenue {
  type: string;
  id: string;
  latitude: number;
  longitude: number;
  title: string;
  address: string;
  foursquare_id?: string;
  foursquare_type?: string;
  google_place_id?: string;
  google_place_type?: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
  thumb_url?: string;
  thumb_width?: number;
  thumb_height?: number;
}

/**
 * @see https://core.telegram.org/bots/api#inlinequeryresultcontact
 */
export interface InlineQueryResultContact {
  type: string;
  id: string;
  phone_number: string;
  first_name: string;
  last_name?: string;
  vcard?: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
  thumb_url?: string;
  thumb_width?: number;
  thumb_height?: number;
}

/**
 * @see https://core.telegram.org/bots/api#inlinequeryresultgame
 */
export interface InlineQueryResultGame {
  type: string;
  id: string;
  game_short_name: string;
  reply_markup?: InlineKeyboardMarkup;
}

/**
 * @see https://core.telegram.org/bots/api#inlinequeryresultcachedphoto
 */
export interface InlineQueryResultCachedPhoto {
  type: string;
  id: string;
  photo_file_id: string;
  title?: string;
  description?: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

/**
 * @see https://core.telegram.org/bots/api#inlinequeryresultcachedgif
 */
export interface InlineQueryResultCachedGif {
  type: string;
  id: string;
  gif_file_id: string;
  title?: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

/**
 * @see https://core.telegram.org/bots/api#inlinequeryresultcachedmpeg4gif
 */
export interface InlineQueryResultCachedMpeg4Gif {
  type: string;
  id: string;
  mpeg4_file_id: string;
  title?: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

/**
 * @see https://core.telegram.org/bots/api#inlinequeryresultcachedsticker
 */
export interface InlineQueryResultCachedSticker {
  type: string;
  id: string;
  sticker_file_id: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

/**
 * @see https://core.telegram.org/bots/api#inlinequeryresultcacheddocument
 */
export interface InlineQueryResultCachedDocument {
  type: string;
  id: string;
  title: string;
  document_file_id: string;
  description?: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

/**
 * @see https://core.telegram.org/bots/api#inlinequeryresultcachedvideo
 */
export interface InlineQueryResultCachedVideo {
  type: string;
  id: string;
  video_file_id: string;
  title: string;
  description?: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

/**
 * @see https://core.telegram.org/bots/api#inlinequeryresultcachedvoice
 */
export interface InlineQueryResultCachedVoice {
  type: string;
  id: string;
  voice_file_id: string;
  title: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

/**
 * @see https://core.telegram.org/bots/api#inlinequeryresultcachedaudio
 */
export interface InlineQueryResultCachedAudio {
  type: string;
  id: string;
  audio_file_id: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

/**
 * @see https://core.telegram.org/bots/api#inputmessagecontent
 */
export type InputMessageContent =
  | InputTextMessageContent
  | InputLocationMessageContent
  | InputVenueMessageContent
  | InputContactMessageContent;

/**
 * @see https://core.telegram.org/bots/api#inputtextmessagecontent
 */
export interface InputTextMessageContent {
  message_text: string;
  parse_mode?: string;
  entities?: MessageEntity[];
  disable_web_page_preview?: boolean;
}

/**
 * @see https://core.telegram.org/bots/api#inputlocationmessagecontent
 */
export interface InputLocationMessageContent {
  latitude: number;
  longitude: number;
  horizontal_accuracy?: number;
  live_period?: number;
  heading?: number;
  proximity_alert_radius?: number;
}

/**
 * @see https://core.telegram.org/bots/api#inputvenuemessagecontent
 */
export interface InputVenueMessageContent {
  latitude: number;
  longitude: number;
  title: string;
  address: string;
  foursquare_id?: string;
  foursquare_type?: string;
  google_place_id?: string;
  google_place_type?: string;
}

/**
 * @see https://core.telegram.org/bots/api#inputcontactmessagecontent
 */
export interface InputContactMessageContent {
  phone_number: string;
  first_name: string;
  last_name?: string;
  vcard?: string;
}

/**
 * @see https://core.telegram.org/bots/api#choseninlineresult
 */
export interface ChosenInlineResult {
  result_id: string;
  from: User;
  location?: Location;
  inline_message_id?: string;
  query: string;
}
