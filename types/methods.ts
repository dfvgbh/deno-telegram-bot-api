import {
  BotCommand,
  ChatPermissions,
  ForceReply,
  InlineKeyboardMarkup,
  InputFile,
  InputMedia,
  InputMediaPhoto,
  InputMediaVideo,
  Message,
  ReplyKeyboardMarkup,
  ReplyKeyboardRemove,
  User,
  UserProfilePhotos,
  File,
  Chat,
  ChatMember,
  Poll,
} from "./base.ts";
import { Update } from "./update.ts";

/**
 * @see https://core.telegram.org/bots/api#getme
 */
export type GetMe = () => Promise<User>;

/**
 * @see https://core.telegram.org/bots/api#sendmessage
 */
export type SendMessage = (params: {
  chat_id: number | string;
  text: string;
  parse_mode?: string;
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
 * @see https://core.telegram.org/bots/api#sendphoto
 */
export type SendPhoto = (params: {
  chat_id: number | string;
  photo: InputFile | string;
  caption?: string;
  parse_mode?: string;
  disable_notification?: boolean;
  reply_to_message_id?: number;
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}) => Promise<Message>;

/**
 * @see https://core.telegram.org/bots/api#sendaudio
 */
export type SendAudio = (params: {
  chat_id: number | string;
  audio: InputFile | string;
  caption?: string;
  parse_mode?: string;
  duration?: number;
  performer?: string;
  title?: string;
  thumb?: InputFile | string;
  disable_notification?: boolean;
  reply_to_message_id?: number;
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}) => Promise<Message>;

/**
 * @see https://core.telegram.org/bots/api#senddocument
 */
export type SendDocument = (params: {
  chat_id: number | string;
  document: InputFile | string;
  thumb?: InputFile | string;
  caption?: string;
  parse_mode?: string;
  disable_notification?: boolean;
  reply_to_message_id?: number;
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}) => Promise<Message>;

/**
 * @see https://core.telegram.org/bots/api#sendvideo
 */
export type SendVideo = (params: {
  chat_id: number | string;
  video: InputFile | string;
  duration?: number;
  width?: number;
  height?: number;
  thumb?: InputFile | string;
  caption?: string;
  parse_mode?: string;
  supports_streaming?: boolean;
  disable_notification?: boolean;
  reply_to_message_id?: number;
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}) => Promise<Message>;

/**
 * @see https://core.telegram.org/bots/api#sendanimation
 */
export type SendAnimation = (params: {
  chat_id: number | string;
  animation: InputFile | string;
  duration?: number;
  width?: number;
  height?: number;
  thumb?: InputFile | string;
  caption?: string;
  parse_mode?: string;
  disable_notification?: boolean;
  reply_to_message_id?: number;
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}) => Promise<Message>;

/**
 * @see https://core.telegram.org/bots/api#sendvoice
 */
export type SendVoice = (params: {
  chat_id: number | string;
  voice: InputFile | string;
  caption?: string;
  parse_mode?: string;
  duration?: number;
  disable_notification?: boolean;
  reply_to_message_id?: number;
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}) => Promise<Message>;

/**
 * @see https://core.telegram.org/bots/api#sendvideonote
 */
export type SendVideoNote = (params: {
  chat_id: number | string;
  video_note: InputFile | string;
  duration?: number;
  length?: number;
  thumb?: InputFile | string;
  disable_notification?: boolean;
  reply_to_message_id?: number;
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}) => Promise<Message>;

/**
 * @see https://core.telegram.org/bots/api#sendmediagroup
 */
export type SendMediaGroup = (params: {
  chat_id: number | string;
  media: (InputMediaPhoto | InputMediaVideo)[];
  disable_notification?: boolean;
  reply_to_message_id?: number;
}) => Promise<Message>;

/**
 * @see https://core.telegram.org/bots/api#sendlocation
 */
export type SendLocation = (params: {
  chat_id: number | string;
  latitude: number;
  longitude: number;
  live_period?: number;
  disable_notification?: boolean;
  reply_to_message_id?: number;
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
  disable_notification?: boolean;
  reply_to_message_id?: number;
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
  open_period?: number;
  close_date?: number;
  is_closed?: boolean;
  disable_notification?: boolean;
  reply_to_message_id?: number;
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
  emoji?: string;
  disable_notification?: boolean;
  reply_to_message_id?: number;
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}) => Promise<Message>;

//TODO: params according to description
//Choose one, depending on what the user is about to receive: typing for text messages, upload_photo for photos, record_video or upload_video for videos, record_audio or upload_audio for audio files, upload_document for general files, find_location for location data, record_video_note or upload_video_note for video notes.
/**
 * @see https://core.telegram.org/bots/api#sendchataction
 */
export type SendChatAction = (params: {
  chat_id: number | string;
  action: string;
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
export type SetChatPhoto = (params: {
  chat_id: number | string;
  photo: InputFile;
}) => Promise<true>;

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
}) => Promise<Chat>;

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

/**
 * @see https://core.telegram.org/bots/api#editmessagetext
 */
export type EditMessageText = (params: {
  chat_id?: number | string;
  message_id?: number;
  inline_message_id?: string;
  text: string;
  parse_mode?: string;
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
  reply_markup?: InlineKeyboardMarkup;
}) => Promise<true>;

/**
 * @see https://core.telegram.org/bots/api#editmessagemedia
 */
export type EditMessageMedia = (params: {
  chat_id?: number | string;
  message_id?: number;
  inline_message_id?: string;
  media: InputMedia;
  reply_markup?: InlineKeyboardMarkup;
}) => Promise<Message | true>;

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

/**
 * https://core.telegram.org/bots/api#getupdates
 */
export type GetUpdates = (params: {
  offset?: number;
  limit?: number;
  timeout?: number;
  allowed_updates?: string[];
}) => Promise<Update[]>;

export type Method =
  | GetMe
  | SendMessage
  | ForwardMessage
  | SendPhoto
  | SendAudio
  | SendDocument
  | SendVideo
  | SendAnimation
  | SendVoice
  | SendVideoNote
  | SendMediaGroup
  | SendLocation
  | EditMessageLiveLocation
  | StopMessageLiveLocation
  | SendVenue
  | SendContact
  | SendPoll
  | SendDice
  | SendChatAction
  | GetUserProfilePhotos
  | GetFile
  | KickChatMember
  | UnbanChatMember
  | RestrictChatMember
  | PromoteChatMember
  | SetChatAdministratorCustomTitle
  | SetChatPermissions
  | ExportChatInviteLink
  | SetChatPhoto
  | DeleteChatPhoto
  | SetChatTitle
  | SetChatDescription
  | PinChatMessage
  | UnpinChatMessage
  | LeaveChat
  | GetChat
  | GetChatAdministrators
  | GetChatMembersCount
  | GetChatMember
  | SetChatStickerSet
  | DeleteChatStickerSet
  | AnswerCallbackQuery
  | SetMyCommands
  | GetMyCommands
  | EditMessageText
  | EditMessageCaption
  | EditMessageMedia
  | EditMessageReplyMarkup
  | StopPoll
  | DeleteMessage
  | GetUpdates;
