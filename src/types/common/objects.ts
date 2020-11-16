/**
 * Type definitions for objects from "Available types" section in official API docs
 * @see https://core.telegram.org/bots/api#available-types
 */

import { CallbackGame, Game } from "../games/objects.ts";
import { PassportData } from "../passport/objects.ts";
import { Invoice, SuccessfulPayment } from "../payments/objects.ts";
import { Sticker } from "../stickers/objects.ts";
import { DiceEmoji } from "../utils.ts";

/**
 * @see https://core.telegram.org/bots/api#user
 */
export interface User {
  id: number;
  is_bot: boolean;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  can_join_groups?: boolean;
  can_read_all_group_messages?: boolean;
  supports_inline_queries?: boolean;
}

/**
 * @see https://core.telegram.org/bots/api#chat
 */
export interface Chat {
  id: number;
  type: string;
  title?: string;
  username?: string;
  first_name?: string;
  last_name?: string;
}

/**
 * @see https://core.telegram.org/bots/api#chat
 * extended Chat object used only in getChat method
 */
export interface ChatExtended extends Chat {
  photo?: ChatPhoto;
  bio?: string;
  description?: string;
  invite_link?: string;
  pinned_message?: Message;
  permissions?: ChatPermissions;
  slow_mode_delay?: number;
  sticker_set_name?: string;
  can_set_sticker_set?: boolean;
  linked_chat_id?: number;
  location?: ChatLocation;
}

/**
 * @see https://core.telegram.org/bots/api#message
 */
export interface Message {
  message_id: number;
  from?: User;
  sender_chat?: Chat;
  date: number;
  chat: Chat;
  forward_from?: User;
  forward_from_chat?: Chat;
  forward_from_message_id?: number;
  forward_signature?: string;
  forward_sender_name?: string;
  forward_date?: number;
  reply_to_message?: Message;
  via_bot?: User;
  edit_date?: number;
  media_group_id?: string;
  author_signature?: string;
  text?: string;
  entities?: MessageEntity[];
  animation?: Animation;
  audio?: Audio;
  document?: Document;
  photo?: PhotoSize[];
  sticker?: Sticker;
  video?: Video;
  video_note?: VideoNote;
  voice?: Voice;
  caption?: string;
  caption_entities?: MessageEntity[];
  contact?: Contact;
  dice?: Dice;
  game?: Game;
  poll?: Poll;
  venue?: Venue;
  location?: Location;
  new_chat_members?: User[];
  left_chat_member?: User;
  new_chat_title?: string;
  new_chat_photo?: PhotoSize[];
  delete_chat_photo?: true;
  group_chat_created?: true;
  supergroup_chat_created?: true;
  channel_chat_created?: true;
  migrate_to_chat_id?: number;
  migrate_from_chat_id?: number;
  pinned_message?: Message;
  invoice?: Invoice;
  successful_payment?: SuccessfulPayment;
  connected_website?: string;
  passport_data?: PassportData;
  proximity_alert_triggered?: ProximityAlertTriggered;
  reply_markup?: InlineKeyboardMarkup;
}

/**
 * @see https://core.telegram.org/bots/api#messageentity
 */
export interface MessageEntity {
  type: string;
  offset: number;
  length: number;
  url?: string;
  user?: User;
  language?: string;
}

/**
 * @see https://core.telegram.org/bots/api#photosize
 */
export interface PhotoSize {
  file_id: string;
  file_unique_id: string;
  width: number;
  height: number;
  file_size?: number;
}

/**
 * @see https://core.telegram.org/bots/api#animation
 */
export interface Animation {
  file_id: string;
  file_unique_id: string;
  width: number;
  height: number;
  duration: number;
  thumb?: PhotoSize;
  file_name?: string;
  mime_type?: string;
  file_size?: number;
}

/**
 * @see https://core.telegram.org/bots/api#audio
 */
export interface Audio {
  file_id: string;
  file_unique_id: string;
  duration: number;
  performer?: string;
  title?: string;
  file_name?: string;
  mime_type?: string;
  file_size?: number;
  thumb?: PhotoSize;
}

/**
 * @see https://core.telegram.org/bots/api#document
 */
export interface Document {
  file_id: string;
  file_unique_id: string;
  thumb?: PhotoSize;
  file_name?: string;
  mime_type?: string;
  file_size?: number;
}

/**
 * @see https://core.telegram.org/bots/api#video
 */
export interface Video {
  file_id: string;
  file_unique_id: string;
  width: number;
  height: number;
  duration: number;
  thumb?: PhotoSize;
  file_name?: string;
  mime_type?: string;
  file_size?: number;
}

/**
 * @see https://core.telegram.org/bots/api#videonote
 */
export interface VideoNote {
  file_id: string;
  file_unique_id: string;
  length: number;
  duration: number;
  thumb?: PhotoSize;
  file_size?: number;
}

/**
 * @see https://core.telegram.org/bots/api#voice
 */
export interface Voice {
  file_id: string;
  file_unique_id: string;
  duration: number;
  mime_type?: string;
  file_size?: number;
}

/**
 * @see https://core.telegram.org/bots/api#contact
 */
export interface Contact {
  phone_number: string;
  first_name: string;
  last_name?: string;
  user_id?: number;
  vcard?: string;
}

/**
 * @see https://core.telegram.org/bots/api#dice
 */
export interface Dice {
  emoji: DiceEmoji;
  value: number;
}

/**
 * @see https://core.telegram.org/bots/api#polloption
 */
export interface PollOption {
  text: string;
  voter_count: number;
}

/**
 * @see https://core.telegram.org/bots/api#pollanswer
 */
export interface PollAnswer {
  poll_id: string;
  user: User;
  option_ids: number[];
}

/**
 * @see https://core.telegram.org/bots/api#poll
 */
export interface Poll {
  id: string;
  question: string;
  options: PollOption[];
  total_voter_count: number;
  is_closed: boolean;
  is_anonymous: boolean;
  type: string;
  allows_multiple_answers: boolean;
  correct_option_id?: number;
  explanation?: string;
  explanation_entities?: MessageEntity[];
  open_period?: number;
  close_date?: number;
}

/**
 * @see https://core.telegram.org/bots/api#location
 */
export interface Location {
  longitude: number;
  latitude: number;
  horizontal_accuracy?: number;
  live_period?: number;
  heading?: number;
  proximity_alert_radius?: number;
}

/**
 * @see https://core.telegram.org/bots/api#venue
 */
export interface Venue {
  location: Location;
  title: string;
  address: string;
  foursquare_id?: string;
  foursquare_type?: string;
  google_place_id?: string;
  google_place_type?: string;
}

/**
 * @see https://core.telegram.org/bots/api#proximityalerttriggered
 */
export interface ProximityAlertTriggered {
  traveler: User;
  watcher: User;
  distance: number;
}

/**
 * @see https://core.telegram.org/bots/api#userprofilephotos
 */
export interface UserProfilePhotos {
  total_count: number;
  photos: PhotoSize[][];
}

/**
 * @see https://core.telegram.org/bots/api#file
 */
export interface File {
  file_id: string;
  file_unique_id: string;
  file_size?: number;
  file_path?: string;
}

/**
 * @see https://core.telegram.org/bots/api#replykeyboardmarkup
 */
export interface ReplyKeyboardMarkup {
  keyboard: KeyboardButton[][];
  resize_keyboard?: boolean;
  one_time_keyboard?: boolean;
  selective?: boolean;
}

/**
 * @see https://core.telegram.org/bots/api#keyboardbutton
 */
export interface KeyboardButton {
  text: string;
  request_contact?: boolean;
  request_location?: boolean;
  request_poll?: KeyboardButtonPollType;
}

/**
 * @see https://core.telegram.org/bots/api#keyboardbuttonpolltype
 */
export interface KeyboardButtonPollType {
  type?: string;
}

/**
 * @see https://core.telegram.org/bots/api#replykeyboardremove
 */
export interface ReplyKeyboardRemove {
  remove_keyboard: true;
  selective?: boolean;
}

/**
 * @see https://core.telegram.org/bots/api#inlinekeyboardmarkup
 */
export interface InlineKeyboardMarkup {
  inline_keyboard: InlineKeyboardButton[][];
}

/**
 * @see https://core.telegram.org/bots/api#inlinekeyboardbutton
 */
export type InlineKeyboardButton =
  | InlineKeyboardUrlButton
  | InlineKeyboardLoginUrlButton
  | InlineKeyboardCallbackDataButton
  | InlineKeyboardSwitchInlineQueryButton
  | InlineKeyboardSwitchInlineQueryCurrentChatButton
  | InlineKeyboardCallbackGameButton
  | InlineKeyboardPayButton;

interface BaseInlineKeyboardButton {
  text: string;
}

export interface InlineKeyboardUrlButton extends BaseInlineKeyboardButton {
  url: string;
}

export interface InlineKeyboardLoginUrlButton extends BaseInlineKeyboardButton {
  login_url: LoginUrl;
}

export interface InlineKeyboardCallbackDataButton
  extends BaseInlineKeyboardButton {
  callback_data: string;
}

export interface InlineKeyboardSwitchInlineQueryButton
  extends BaseInlineKeyboardButton {
  switch_inline_query: string;
}

export interface InlineKeyboardSwitchInlineQueryCurrentChatButton
  extends BaseInlineKeyboardButton {
  switch_inline_query_current_chat: string;
}

export interface InlineKeyboardCallbackGameButton
  extends BaseInlineKeyboardButton {
  callback_game: CallbackGame;
}

export interface InlineKeyboardPayButton extends BaseInlineKeyboardButton {
  pay: boolean;
}

/**
 * @see https://core.telegram.org/bots/api#loginurl
 */
export interface LoginUrl {
  url: string;
  forward_text?: string;
  bot_username?: string;
  request_write_access?: boolean;
}

/**
 * @see https://core.telegram.org/bots/api#callbackquery
 */
export interface CallbackQuery {
  id: string;
  from: User;
  message?: Message;
  inline_message_id?: string;
  chat_instance: string;
  data?: string;
  game_short_name?: string;
}

/**
 * @see https://core.telegram.org/bots/api#forcereply
 */
export interface ForceReply {
  force_reply: true;
  selective?: boolean;
}

/**
 * @see https://core.telegram.org/bots/api#chatphoto
 */
export interface ChatPhoto {
  small_file_id: string;
  small_file_unique_id: string;
  big_file_id: string;
  big_file_unique_id: string;
}

/**
 * @see https://core.telegram.org/bots/api#chatmember
 */
export interface ChatMember {
  user: User;
  status: string;
  custom_title?: string;
  is_anonymous?: boolean;
  until_date?: number;
  can_be_edited?: boolean;
  can_post_messages?: boolean;
  can_edit_messages?: boolean;
  can_delete_messages?: boolean;
  can_restrict_members?: boolean;
  can_promote_members?: boolean;
  can_change_info?: boolean;
  can_invite_users?: boolean;
  can_pin_messages?: boolean;
  is_member?: boolean;
  can_send_messages?: boolean;
  can_send_media_messages?: boolean;
  can_send_polls?: boolean;
  can_send_other_messages?: boolean;
  can_add_web_page_previews?: boolean;
}

/**
 * @see https://core.telegram.org/bots/api#chatpermissions
 */
export interface ChatPermissions {
  can_send_messages?: boolean;
  can_send_media_messages?: boolean;
  can_send_polls?: boolean;
  can_send_other_messages?: boolean;
  can_add_web_page_previews?: boolean;
  can_change_info?: boolean;
  can_invite_users?: boolean;
  can_pin_messages?: boolean;
}
/**
 * @see https://core.telegram.org/bots/api#chatlocation
 */
export interface ChatLocation {
  location: Location;
  address: string;
}

/**
 * @see https://core.telegram.org/bots/api#botcommand
 */
export interface BotCommand {
  command: string;
  description: string;
}

/**
 * @see https://core.telegram.org/bots/api#responseparameters
 */
export interface ResponseParameters {
  migrate_to_chat_id?: number;
  retry_after?: number;
}

/**
 * @see https://core.telegram.org/bots/api#inputmedia
 */
export type InputMedia =
  | InputMediaAnimation
  | InputMediaDocument
  | InputMediaAudio
  | InputMediaPhoto
  | InputMediaVideo;

/**
 * @see https://core.telegram.org/bots/api#inputmediaphoto
 */
export interface InputMediaPhoto {
  type: "photo";
  media: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
}

/**
 * @see https://core.telegram.org/bots/api#inputmediavideo
 */
export interface InputMediaVideo {
  type: "video";
  media: string;
  thumb?: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  width?: number;
  height?: number;
  duration?: number;
  supports_streaming?: boolean;
}

/**
 * @see https://core.telegram.org/bots/api#inputmediaanimation
 */
export interface InputMediaAnimation {
  type: "animation";
  media: string;
  thumb?: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  width?: number;
  height?: number;
  duration?: number;
}

/**
 * @see https://core.telegram.org/bots/api#inputmediaaudio
 */
export interface InputMediaAudio {
  type: "audio";
  media: string;
  thumb?: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  duration?: number;
  performer?: string;
  title?: string;
}

/**
 * @see https://core.telegram.org/bots/api#inputmediadocument
 */
export interface InputMediaDocument {
  type: "document";
  media: string;
  thumb?: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  disable_content_type_detection?: boolean;
}

/**
 * @see https://core.telegram.org/bots/api#inputfile
 */
export type InputFile = Blob;
