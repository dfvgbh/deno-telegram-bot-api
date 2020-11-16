import {
  AnswerCallbackQuery,
  Close,
  CopyMessage,
  DeleteChatPhoto,
  DeleteChatStickerSet,
  EditMessageLiveLocation,
  ExportChatInviteLink,
  ForwardMessage,
  GetChat,
  GetChatAdministrators,
  GetChatMember,
  GetChatMembersCount,
  GetFile,
  GetMe,
  GetMyCommands,
  GetUserProfilePhotos,
  KickChatMember,
  LeaveChat,
  LogOut,
  PinChatMessage,
  PromoteChatMember,
  RestrictChatMember,
  SendAnimation,
  SendAudio,
  SendChatAction,
  SendContact,
  SendDice,
  SendDocument,
  SendLocation,
  SendMediaGroup,
  SendMessage,
  SendPhoto,
  SendPoll,
  SendVenue,
  SendVideo,
  SendVideoNote,
  SendVoice,
  SetChatAdministratorCustomTitle,
  SetChatDescription,
  SetChatPermissions,
  SetChatPhoto,
  SetChatStickerSet,
  SetChatTitle,
  SetMyCommands,
  StopMessageLiveLocation,
  UnbanChatMember,
  UnpinAllChatMessages,
  UnpinChatMessage,
} from "./common/methods.ts";
import { GetGameHighScores, SendGame, SetGameScore } from "./games/methods.ts";
import {
  DeleteWebhook,
  GetUpdates,
  GetWebhookInfo,
  SetWebhook,
} from "./getting-updates/methods.ts";
import { AnswerInlineQuery } from "./inline-mode/methods.ts";
import { SetPassportDataErrors } from "./passport/methods.ts";
import {
  AnswerPreCheckoutQuery,
  AnswerShippingQuery,
  SendInvoice,
} from "./payments/methods.ts";
import {
  AddStickerToSet,
  CreateNewStickerSet,
  DeleteStickerFromSet,
  GetStickerSet,
  SendSticker,
  SetStickerPositionInSet,
  SetStickerSetThumb,
  UploadStickerFile,
} from "./stickers/methods.ts";
import {
  DeleteMessage,
  EditMessageCaption,
  EditMessageMedia,
  EditMessageReplyMarkup,
  EditMessageText,
  StopPoll,
} from "./updating-messages/methods.ts";

export type Method =
  | GetMe
  | LogOut
  | Close
  | SendMessage
  | ForwardMessage
  | CopyMessage
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
  | UnpinAllChatMessages
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
  | GetUpdates
  | SetWebhook
  | DeleteWebhook
  | GetWebhookInfo
  | SendSticker
  | GetStickerSet
  | UploadStickerFile
  | CreateNewStickerSet
  | AddStickerToSet
  | SetStickerPositionInSet
  | DeleteStickerFromSet
  | SetStickerSetThumb
  | AnswerInlineQuery
  | SendInvoice
  | AnswerShippingQuery
  | AnswerPreCheckoutQuery
  | SetPassportDataErrors
  | SendGame
  | SetGameScore
  | GetGameHighScores;
