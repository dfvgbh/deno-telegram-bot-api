/**
 * Type definitions for methods from "Available methods" section in official API docs
 * @see https://core.telegram.org/bots/api#available-methods
 */

import { Attachments, DiceEmoji } from "../utils.ts";
import {
  BotCommand,
  ChatExtended,
  ChatMember,
  ChatPermissions,
  File,
  ForceReply,
  InlineKeyboardMarkup,
  InputFile,
  InputMediaAudio,
  InputMediaDocument,
  InputMediaPhoto,
  InputMediaVideo,
  Message,
  MessageEntity,
  ReplyKeyboardMarkup,
  ReplyKeyboardRemove,
  User,
  UserProfilePhotos,
} from "./objects.ts";

/**
 * @see https://core.telegram.org/bots/api#getme
 */
export type GetMe = () => Promise<User>;

/**
 * @see https://core.telegram.org/bots/api#logout
 */
export type LogOut = () => Promise<true>;

/**
 * @see https://core.telegram.org/bots/api#close
 */
export type Close = () => Promise<true>;

/**
 * @see https://core.telegram.org/bots/api#sendmessage
 */
export type SendMessage = (params: {
  chat_id: number | string;
  text: string;
  parse_mode?: string;
  entities?: MessageEntity[];
  disable_web_page_preview?: boolean;
  disable_notification?: boolean;
  reply_to_message_id?: number;
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}) => Promise<Message>;

/**
 * @see https://core.telegram.org/bots/api#forwardmessage
 */
export type ForwardMessage = (params: {
  chat_id: number | string;
  from_chat_id: number | string;
  disable_notification?: boolean;
  message_id: number;
}) => Promise<Message>;

/**
 * @see https://core.telegram.org/bots/api#copymessage
 */
export type CopyMessage = (params: {
  chat_id: number | string;
  from_chat_id: number | string;
  message_id: number;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  disable_notification?: boolean;
  reply_to_message_id?: number;
  allow_sending_without_reply?: boolean;
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}) => Promise<Message>;

/**
 * @see https://core.telegram.org/bots/api#sendphoto
 */
export type SendPhoto = (
  params: FormData | {
    chat_id: number | string;
    photo: InputFile | string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
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
 * @see https://core.telegram.org/bots/api#sendaudio
 */
export type SendAudio = (
  params: FormData | {
    chat_id: number | string;
    audio: InputFile | string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    duration?: number;
    performer?: string;
    title?: string;
    thumb?: InputFile | string;
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?:
      | InlineKeyboardMarkup
      | ReplyKeyboardMarkup
      | ReplyKeyboardRemove
      | ForceReply;
    attachments?: Attachments;
  },
) => Promise<Message>;

/**
 * @see https://core.telegram.org/bots/api#senddocument
 */
export type SendDocument = (
  params: FormData | {
    chat_id: number | string;
    document: InputFile | string;
    thumb?: InputFile | string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    disable_content_type_detection?: boolean;
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?:
      | InlineKeyboardMarkup
      | ReplyKeyboardMarkup
      | ReplyKeyboardRemove
      | ForceReply;
    attachments?: Attachments;
  },
) => Promise<Message>;

/**
 * @see https://core.telegram.org/bots/api#sendvideo
 */
export type SendVideo = (
  params: FormData | {
    chat_id: number | string;
    video: InputFile | string;
    duration?: number;
    width?: number;
    height?: number;
    thumb?: InputFile | string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    supports_streaming?: boolean;
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?:
      | InlineKeyboardMarkup
      | ReplyKeyboardMarkup
      | ReplyKeyboardRemove
      | ForceReply;
    attachments?: Attachments;
  },
) => Promise<Message>;

/**
 * @see https://core.telegram.org/bots/api#sendanimation
 */
export type SendAnimation = (
  params: FormData | {
    chat_id: number | string;
    animation: InputFile | string;
    duration?: number;
    width?: number;
    height?: number;
    thumb?: InputFile | string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?:
      | InlineKeyboardMarkup
      | ReplyKeyboardMarkup
      | ReplyKeyboardRemove
      | ForceReply;
    attachments?: Attachments;
  },
) => Promise<Message>;

/**
 * @see https://core.telegram.org/bots/api#sendvoice
 */
export type SendVoice = (
  params: FormData | {
    chat_id: number | string;
    voice: InputFile | string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    duration?: number;
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
 * @see https://core.telegram.org/bots/api#sendvideonote
 */
export type SendVideoNote = (
  params: FormData | {
    chat_id: number | string;
    video_note: InputFile | string;
    duration?: number;
    length?: number;
    thumb?: InputFile | string;
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?:
      | InlineKeyboardMarkup
      | ReplyKeyboardMarkup
      | ReplyKeyboardRemove
      | ForceReply;
    attachments?: Attachments;
  },
) => Promise<Message>;

/**
 * @see https://core.telegram.org/bots/api#sendmediagroup
 */
export type SendMediaGroup = (
  params: FormData | {
    chat_id: number | string;
    media:
      | InputMediaAudio[]
      | InputMediaDocument[]
      | (InputMediaPhoto | InputMediaVideo)[];
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    attachments?: Attachments;
  },
) => Promise<Message>;

/**
 * @see https://core.telegram.org/bots/api#sendlocation
 */
export type SendLocation = (params: {
  chat_id: number | string;
  latitude: number;
  longitude: number;
  horizontal_accuracy?: number;
  live_period?: number;
  heading?: number;
  proximity_alert_radius?: number;
  disable_notification?: boolean;
  reply_to_message_id?: number;
  allow_sending_without_reply?: boolean;
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}) => Promise<Message>;

/**
 * @see https://core.telegram.org/bots/api#editmessagelivelocation
 */
export type EditMessageLiveLocation = (params: {
  chat_id?: number | string;
  message_id?: number;
  inline_message_id?: string;
  latitude: number;
  longitude: number;
  horizontal_accuracy?: number;
  heading?: number;
  proximity_alert_radius?: number;
  reply_markup?: InlineKeyboardMarkup;
}) => Promise<Message | true>;

/**
 * @see https://core.telegram.org/bots/api#stopmessagelivelocation
 */
export type StopMessageLiveLocation = (params: {
  chat_id?: number | string;
  message_id?: number;
  inline_message_id?: string;
  reply_markup?: InlineKeyboardMarkup;
}) => Promise<Message | true>;

/**
 * @see https://core.telegram.org/bots/api#sendvenue
 */
export type SendVenue = (params: {
  chat_id: number | string;
  latitude: number;
  longitude: number;
  title: string;
  address: string;
  foursquare_id?: string;
  foursquare_type?: string;
  google_place_id?: string;
  google_place_type?: string;
  disable_notification?: boolean;
  reply_to_message_id?: number;
  allow_sending_without_reply?: boolean;
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}) => Promise<Message>;

/**
 * @see https://core.telegram.org/bots/api#sendcontact
 */
export type SendContact = (params: {
  chat_id: number | string;
  phone_number: string;
  first_name: string;
  last_name?: string;
  vcard?: string;
  disable_notification?: boolean;
  reply_to_message_id?: number;
  allow_sending_without_reply?: boolean;
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}) => Promise<Message>;

/**
 * @see https://core.telegram.org/bots/api#sendpoll
 */
export type SendPoll = (params: {
  chat_id: number | string;
  question: string;
  options: string[];
  is_anonymous?: boolean;
  type?: string;
  allows_multiple_answers?: boolean;
  correct_option_id?: number;
  explanation?: string;
  explanation_parse_mode?: string;
  explanation_entities?: MessageEntity[];
  open_period?: number;
  close_date?: number;
  is_closed?: boolean;
  disable_notification?: boolean;
  reply_to_message_id?: number;
  allow_sending_without_reply?: boolean;
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}) => Promise<Message>;

/**
 * @see https://core.telegram.org/bots/api#senddice
 */
export type SendDice = (params: {
  chat_id: number | string;
  emoji?: DiceEmoji;
  disable_notification?: boolean;
  reply_to_message_id?: number;
  allow_sending_without_reply?: boolean;
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}) => Promise<Message>;

/**
 * @see https://core.telegram.org/bots/api#sendchataction
 */
export type SendChatAction = (params: {
  chat_id: number | string;
  action:
    | "typing"
    | "upload_photo"
    | "record_video"
    | "upload_video"
    | "record_audio"
    | "upload_audio"
    | "upload_document"
    | "find_location"
    | "record_video_note"
    | "upload_video_note";
}) => Promise<true>;

/**
 * @see https://core.telegram.org/bots/api#getuserprofilephotos
 */
export type GetUserProfilePhotos = (params: {
  user_id: number;
  offset?: number;
  limit?: number;
}) => Promise<UserProfilePhotos>;

/**
 * @see https://core.telegram.org/bots/api#getfile
 */
export type GetFile = (params: {
  file_id: string;
}) => Promise<File>;

/**
 * @see https://core.telegram.org/bots/api#kickchatmember
 */
export type KickChatMember = (params: {
  chat_id: number | string;
  user_id: number;
  until_date?: number;
}) => Promise<true>;

/**
 * @see https://core.telegram.org/bots/api#unbanchatmember
 */
export type UnbanChatMember = (params: {
  chat_id: number | string;
  user_id: number;
  only_if_banned?: boolean;
}) => Promise<true>;

/**
 * @see https://core.telegram.org/bots/api#restrictchatmember
 */
export type RestrictChatMember = (params: {
  chat_id: number | string;
  user_id: number;
  permissions: ChatPermissions;
  until_date?: number;
}) => Promise<true>;

/**
 * @see https://core.telegram.org/bots/api#promotechatmember
 */
export type PromoteChatMember = (params: {
  chat_id: number | string;
  user_id: number;
  is_anonymous?: boolean;
  can_change_info?: boolean;
  can_post_messages?: boolean;
  can_edit_messages?: boolean;
  can_delete_messages?: boolean;
  can_invite_users?: boolean;
  can_restrict_members?: boolean;
  can_pin_messages?: boolean;
  can_promote_members?: boolean;
}) => Promise<true>;

/**
 * @see https://core.telegram.org/bots/api#setchatadministratorcustomtitle
 */
export type SetChatAdministratorCustomTitle = (params: {
  chat_id: number | string;
  user_id: number;
  custom_title: string;
}) => Promise<true>;

/**
 * @see https://core.telegram.org/bots/api#setchatpermissions
 */
export type SetChatPermissions = (params: {
  chat_id: number | string;
  permissions: ChatPermissions;
}) => Promise<true>;

/**
 * @see https://core.telegram.org/bots/api#exportchatinvitelink
 */
export type ExportChatInviteLink = (params: {
  chat_id: number | string;
}) => Promise<string>;

/**
 * @see https://core.telegram.org/bots/api#setchatphoto
 */
export type SetChatPhoto = (
  params: FormData | {
    chat_id: number | string;
    photo: InputFile;
  },
) => Promise<true>;

/**
 * @see https://core.telegram.org/bots/api#deletechatphoto
 */
export type DeleteChatPhoto = (params: {
  chat_id: number | string;
}) => Promise<true>;

/**
 * @see https://core.telegram.org/bots/api#setchattitle
 */
export type SetChatTitle = (params: {
  chat_id: number | string;
  title: string;
}) => Promise<true>;

/**
 * @see https://core.telegram.org/bots/api#setchatdescription
 */
export type SetChatDescription = (params: {
  chat_id: number | string;
  description?: string;
}) => Promise<true>;

/**
 * @see https://core.telegram.org/bots/api#pinchatmessage
 */
export type PinChatMessage = (params: {
  chat_id: number | string;
  message_id: number;
  disable_notification?: boolean;
}) => Promise<true>;

/**
 * @see https://core.telegram.org/bots/api#unpinchatmessage
 */
export type UnpinChatMessage = (params: {
  chat_id: number | string;
  message_id?: number;
}) => Promise<true>;

/**
 * @see https://core.telegram.org/bots/api#unpinallchatmessages
 */
export type UnpinAllChatMessages = (params: {
  chat_id: number | string;
}) => Promise<true>;

/**
 * @see https://core.telegram.org/bots/api#leavechat
 */
export type LeaveChat = (params: {
  chat_id: number | string;
}) => Promise<true>;

/**
 * @see https://core.telegram.org/bots/api#getchat
 */
export type GetChat = (params: {
  chat_id: number | string;
}) => Promise<ChatExtended>;

/**
 * @see https://core.telegram.org/bots/api#getchatadministrators
 */
export type GetChatAdministrators = (params: {
  chat_id: number | string;
}) => Promise<ChatMember[]>;

/**
 * @see https://core.telegram.org/bots/api#getchatmemberscount
 */
export type GetChatMembersCount = (params: {
  chat_id: number | string;
}) => Promise<number>;

/**
 * @see https://core.telegram.org/bots/api#getchatmember
 */
export type GetChatMember = (params: {
  chat_id: number | string;
  user_id: number;
}) => Promise<ChatMember>;

/**
 * @see https://core.telegram.org/bots/api#setchatstickerset
 */
export type SetChatStickerSet = (params: {
  chat_id: number | string;
  sticker_set_name: string;
}) => Promise<true>;

/**
 * @see https://core.telegram.org/bots/api#deletechatstickerset
 */
export type DeleteChatStickerSet = (params: {
  chat_id: number | string;
}) => Promise<true>;

/**
 * @see https://core.telegram.org/bots/api#answercallbackquery
 */
export type AnswerCallbackQuery = (params: {
  callback_query_id: string;
  text?: string;
  show_alert?: boolean;
  url?: string;
  cache_time?: number;
}) => Promise<true>;

/**
 * @see https://core.telegram.org/bots/api#setmycommands
 */
export type SetMyCommands = (params: {
  commands: BotCommand[];
}) => Promise<true>;

/**
 * @see https://core.telegram.org/bots/api#getmycommands
 */
export type GetMyCommands = () => Promise<BotCommand[]>;
