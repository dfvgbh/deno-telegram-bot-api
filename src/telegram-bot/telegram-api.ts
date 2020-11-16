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
} from "../types/common/methods.ts";
import {
  GetGameHighScores,
  SendGame,
  SetGameScore,
} from "../types/games/methods.ts";
import {
  DeleteWebhook,
  GetUpdates,
  GetWebhookInfo,
  SetWebhook,
} from "../types/getting-updates/methods.ts";
import { AnswerInlineQuery } from "../types/inline-mode/methods.ts";
import { Method } from "../types/method.ts";
import { SetPassportDataErrors } from "../types/passport/methods.ts";
import {
  AnswerPreCheckoutQuery,
  AnswerShippingQuery,
  SendInvoice,
} from "../types/payments/methods.ts";
import {
  AddStickerToSet,
  CreateNewStickerSet,
  DeleteStickerFromSet,
  GetStickerSet,
  SendSticker,
  SetStickerPositionInSet,
  SetStickerSetThumb,
  UploadStickerFile,
} from "../types/stickers/methods.ts";
import {
  DeleteMessage,
  EditMessageCaption,
  EditMessageMedia,
  EditMessageReplyMarkup,
  EditMessageText,
  StopPoll,
} from "../types/updating-messages/methods.ts";
import { buildFormData, isBlob, isFormData } from "./utils.ts";

export abstract class TelegramApi {
  getMe: GetMe = () => this.request<GetMe>("getMe");

  logOut: LogOut = () => this.request<LogOut>("logOut");

  close: Close = () => this.request<LogOut>("close");

  sendMessage: SendMessage = (params) =>
    this.request<SendMessage>("sendMessage", params);

  forwardMessage: ForwardMessage = (params) =>
    this.request<ForwardMessage>("forwardMessage", params);

  copyMessage: CopyMessage = (params) =>
    this.request<CopyMessage>("copyMessage", params);

  sendPhoto: SendPhoto = (params) => {
    if (isFormData(params)) {
      return this.multipartRequest<SendPhoto>("sendPhoto", params);
    }
    if (isBlob(params.photo)) {
      const formData = buildFormData(params);
      return this.multipartRequest<SendPhoto>("sendPhoto", formData);
    }
    return this.request<SendPhoto>("sendPhoto", params);
  };

  sendAudio: SendAudio = (params) => {
    if (isFormData(params)) {
      return this.multipartRequest<SendAudio>("sendAudio", params);
    }
    const { audio, thumb } = params;
    if (
      params.attachments || isBlob(audio) ||
      (thumb && isBlob(thumb))
    ) {
      const { attachments = {}, ...bareParams } = params;
      const formData = buildFormData({
        ...bareParams,
        ...attachments,
      });
      return this.multipartRequest<SendAudio>("sendAudio", formData);
    }
    return this.request<SendAudio>("sendAudio", params);
  };

  sendDocument: SendDocument = (params) => {
    if (isFormData(params)) {
      return this.multipartRequest<SendDocument>("sendDocument", params);
    }
    const { document, thumb } = params;
    if (
      params.attachments || isBlob(document) ||
      (thumb && isBlob(thumb))
    ) {
      const { attachments = {}, ...bareParams } = params;
      const formData = buildFormData({
        ...bareParams,
        ...attachments,
      });
      return this.multipartRequest<SendDocument>("sendDocument", formData);
    }
    return this.request<SendDocument>("sendDocument", params);
  };

  sendVideo: SendVideo = (params) => {
    if (isFormData(params)) {
      return this.multipartRequest<SendVideo>("sendVideo", params);
    }
    const { video, thumb } = params;
    if (
      params.attachments || isBlob(video) ||
      (thumb && isBlob(thumb))
    ) {
      const { attachments = {}, ...bareParams } = params;
      const formData = buildFormData({
        ...bareParams,
        ...attachments,
      });
      return this.multipartRequest<SendVideo>("sendVideo", formData);
    }
    return this.request<SendVideo>("sendVideo", params);
  };

  sendAnimation: SendAnimation = (params) => {
    if (isFormData(params)) {
      return this.multipartRequest<SendAnimation>("sendAnimation", params);
    }
    const { animation, thumb } = params;
    if (
      params.attachments || isBlob(animation) ||
      (thumb && isBlob(thumb))
    ) {
      const { attachments = {}, ...bareParams } = params;
      const formData = buildFormData({
        ...bareParams,
        ...attachments,
      });
      return this.multipartRequest<SendAnimation>("sendAnimation", formData);
    }
    return this.request<SendAnimation>("sendAnimation", params);
  };

  sendVoice: SendVoice = (params) => {
    if (isFormData(params)) {
      return this.multipartRequest<SendVoice>("sendVoice", params);
    }
    if (isBlob(params.voice)) {
      const formData = buildFormData(params);
      return this.multipartRequest<SendVoice>("sendVoice", formData);
    }
    return this.request<SendVoice>("sendVoice", params);
  };

  sendVideoNote: SendVideoNote = (params) => {
    if (isFormData(params)) {
      return this.multipartRequest<SendVideoNote>("sendVideoNote", params);
    }
    const { video_note: videoNote, thumb } = params;
    if (
      params.attachments || isBlob(videoNote) ||
      (thumb && isBlob(thumb))
    ) {
      const { attachments = {}, ...bareParams } = params;
      const formData = buildFormData({
        ...bareParams,
        ...attachments,
      });
      return this.multipartRequest<SendVideoNote>("sendVideoNote", formData);
    }
    return this.request<SendVideoNote>("sendVideoNote", params);
  };

  sendMediaGroup: SendMediaGroup = (params) => {
    if (isFormData(params)) {
      return this.multipartRequest<SendMediaGroup>("sendMediaGroup", params);
    }
    if (params.attachments) {
      const { attachments = {}, ...bareParams } = params;
      const formData = buildFormData({
        ...bareParams,
        ...attachments,
      });
      return this.multipartRequest<SendMediaGroup>("sendMediaGroup", formData);
    }
    return this.request<SendMediaGroup>("sendMediaGroup", params);
  };

  sendLocation: SendLocation = (params) =>
    this.request<SendLocation>("sendLocation", params);

  editMessageLiveLocation: EditMessageLiveLocation = (params) =>
    this.request<EditMessageLiveLocation>(
      "editMessageLiveLocation",
      params,
    );

  stopMessageLiveLocation: StopMessageLiveLocation = (params) =>
    this.request<StopMessageLiveLocation>(
      "stopMessageLiveLocation",
      params,
    );

  sendVenue: SendVenue = (params) =>
    this.request<SendVenue>("sendVenue", params);

  sendContact: SendContact = (params) =>
    this.request<SendContact>("sendContact", params);

  sendPoll: SendPoll = (params) => this.request<SendPoll>("sendPoll", params);

  sendDice: SendDice = (params) => this.request<SendDice>("sendDice", params);

  sendChatAction: SendChatAction = (params) =>
    this.request<SendChatAction>("sendChatAction", params);

  getUserProfilePhotos: GetUserProfilePhotos = (params) =>
    this.request<GetUserProfilePhotos>("getUserProfilePhotos", params);

  getFile: GetFile = (params) => this.request<GetFile>("getFile", params);

  kickChatMember: KickChatMember = (params) =>
    this.request<KickChatMember>("kickChatMember", params);

  unbanChatMember: UnbanChatMember = (params) =>
    this.request<UnbanChatMember>("unbanChatMember", params);

  restrictChatMember: RestrictChatMember = (params) =>
    this.request<RestrictChatMember>("restrictChatMember", params);

  promoteChatMember: PromoteChatMember = (params) =>
    this.request<PromoteChatMember>("promoteChatMember", params);

  setChatAdministratorCustomTitle: SetChatAdministratorCustomTitle = (params) =>
    this.request<SetChatAdministratorCustomTitle>(
      "setChatAdministratorCustomTitle",
      params,
    );

  setChatPermissions: SetChatPermissions = (params) =>
    this.request<SetChatPermissions>("setChatPermissions", params);

  exportChatInviteLink: ExportChatInviteLink = (params) =>
    this.request<ExportChatInviteLink>("exportChatInviteLink", params);

  setChatPhoto: SetChatPhoto = (params) => {
    if (isFormData(params)) {
      return this.multipartRequest<SetChatPhoto>("setChatPhoto", params);
    }
    if (isBlob(params.photo)) {
      const formData = buildFormData(params);
      return this.multipartRequest<SetChatPhoto>("setChatPhoto", formData);
    }
    return this.request<SetChatPhoto>("setChatPhoto", params);
  };

  deleteChatPhoto: DeleteChatPhoto = (params) =>
    this.request<DeleteChatPhoto>("deleteChatPhoto", params);

  setChatTitle: SetChatTitle = (params) =>
    this.request<SetChatTitle>("setChatTitle", params);

  setChatDescription: SetChatDescription = (params) =>
    this.request<SetChatDescription>("setChatDescription", params);

  pinChatMessage: PinChatMessage = (params) =>
    this.request<PinChatMessage>("pinChatMessage", params);

  unpinChatMessage: UnpinChatMessage = (params) =>
    this.request<UnpinChatMessage>("unpinChatMessage", params);

  unpinAllChatMessages: UnpinAllChatMessages = (params) =>
    this.request<UnpinAllChatMessages>("unpinAllChatMessages", params);

  leaveChat: LeaveChat = (params) =>
    this.request<LeaveChat>("leaveChat", params);

  getChat: GetChat = (params) => this.request<GetChat>("getChat", params);

  getChatAdministrators: GetChatAdministrators = (params) =>
    this.request<GetChatAdministrators>("getChatAdministrators", params);

  getChatMembersCount: GetChatMembersCount = (params) =>
    this.request<GetChatMembersCount>("getChatMembersCount", params);

  getChatMember: GetChatMember = (params) =>
    this.request<GetChatMember>("getChatMember", params);

  setChatStickerSet: SetChatStickerSet = (params) =>
    this.request<SetChatStickerSet>("setChatStickerSet", params);

  deleteChatStickerSet: DeleteChatStickerSet = (params) =>
    this.request<DeleteChatStickerSet>("deleteChatStickerSet", params);

  answerCallbackQuery: AnswerCallbackQuery = (params) =>
    this.request<AnswerCallbackQuery>("answerCallbackQuery", params);

  setMyCommands: SetMyCommands = (params) =>
    this.request<SetMyCommands>("setMyCommands", params);

  getMyCommands: GetMyCommands = () =>
    this.request<GetMyCommands>("getMyCommands");

  editMessageText: EditMessageText = (params) =>
    this.request<EditMessageText>("editMessageText", params);

  editMessageCaption: EditMessageCaption = (params) =>
    this.request<EditMessageCaption>("editMessageCaption", params);

  editMessageMedia: EditMessageMedia = (params) => {
    if (isFormData(params)) {
      return this.multipartRequest<EditMessageMedia>(
        "editMessageMedia",
        params,
      );
    }
    if (params.attachments) {
      const { attachments = {}, ...bareParams } = params;
      const formData = buildFormData({
        ...bareParams,
        ...attachments,
      });
      return this.multipartRequest<EditMessageMedia>(
        "editMessageMedia",
        formData,
      );
    }
    return this.request<EditMessageMedia>("editMessageMedia", params);
  };

  editMessageReplyMarkup: EditMessageReplyMarkup = (params) =>
    this.request<EditMessageReplyMarkup>(
      "editMessageReplyMarkup",
      params,
    );

  stopPoll: StopPoll = (params) => this.request<StopPoll>("stopPoll", params);

  deleteMessage: DeleteMessage = (params) =>
    this.request<DeleteMessage>("deleteMessage", params);

  getUpdates: GetUpdates = (params) =>
    this.request<GetUpdates>("getUpdates", params);

  setWebhook: SetWebhook = (params) => {
    if (isFormData(params)) {
      return this.multipartRequest<SetWebhook>("setWebhook", params);
    }
    if (isBlob(params.certificate)) {
      const formData = buildFormData(params);
      return this.multipartRequest<SetWebhook>("setWebhook", formData);
    }
    return this.request<SetWebhook>("setWebhook", params);
  };

  deleteWebhook: DeleteWebhook = () =>
    this.request<DeleteWebhook>("deleteWebhook");

  getWebhookInfo: GetWebhookInfo = () =>
    this.request<GetWebhookInfo>("getWebhookInfo");

  sendSticker: SendSticker = (params) => {
    if (isFormData(params)) {
      return this.multipartRequest<SendSticker>("sendSticker", params);
    }
    if (isBlob(params.sticker)) {
      const formData = buildFormData(params);
      return this.multipartRequest<SendSticker>("sendSticker", formData);
    }
    return this.request<SendSticker>("sendSticker", params);
  };

  getStickerSet: GetStickerSet = (params) =>
    this.request<GetStickerSet>("getStickerSet", params);

  uploadStickerFile: UploadStickerFile = (params) => {
    if (isFormData(params)) {
      return this.multipartRequest<UploadStickerFile>(
        "uploadStickerFile",
        params,
      );
    }
    const formData = buildFormData(params);
    return this.multipartRequest<UploadStickerFile>(
      "uploadStickerFile",
      formData,
    );
  };

  createNewStickerSet: CreateNewStickerSet = (params) => {
    if (isFormData(params)) {
      return this.multipartRequest<CreateNewStickerSet>(
        "createNewStickerSet",
        params,
      );
    }
    if (isBlob(params.png_sticker) || params.tgs_sticker) {
      const formData = buildFormData(params);
      return this.multipartRequest<CreateNewStickerSet>(
        "createNewStickerSet",
        formData,
      );
    }
    return this.request<CreateNewStickerSet>("createNewStickerSet", params);
  };

  addStickerToSet: AddStickerToSet = (params) => {
    if (isFormData(params)) {
      return this.multipartRequest<AddStickerToSet>("addStickerToSet", params);
    }
    if (isBlob(params.png_sticker) || params.tgs_sticker) {
      const formData = buildFormData(params);
      return this.multipartRequest<AddStickerToSet>(
        "addStickerToSet",
        formData,
      );
    }
    return this.request<AddStickerToSet>("addStickerToSet", params);
  };

  setStickerPositionInSet: SetStickerPositionInSet = (params) =>
    this.request<SetStickerPositionInSet>(
      "setStickerPositionInSet",
      params,
    );

  deleteStickerFromSet: DeleteStickerFromSet = (params) =>
    this.request<DeleteStickerFromSet>("deleteStickerFromSet", params);

  setStickerSetThumb: SetStickerSetThumb = (params) => {
    if (isFormData(params)) {
      return this.multipartRequest<SetStickerSetThumb>(
        "setStickerSetThumb",
        params,
      );
    }
    if (isBlob(params.thumb)) {
      const formData = buildFormData(params);
      return this.multipartRequest<SetStickerSetThumb>(
        "setStickerSetThumb",
        formData,
      );
    }
    return this.request<SetStickerSetThumb>("setStickerSetThumb", params);
  };

  answerInlineQuery: AnswerInlineQuery = (params) =>
    this.request<AnswerInlineQuery>("answerInlineQuery", params);

  sendInvoice: SendInvoice = (params) =>
    this.request<SendInvoice>("sendInvoice", params);

  answerShippingQuery: AnswerShippingQuery = (params) =>
    this.request<AnswerShippingQuery>("answerShippingQuery", params);

  answerPreCheckoutQuery: AnswerPreCheckoutQuery = (params) =>
    this.request<AnswerPreCheckoutQuery>(
      "answerPreCheckoutQuery",
      params,
    );

  setPassportDataErrors: SetPassportDataErrors = (params) =>
    this.request<SetPassportDataErrors>("setPassportDataErrors", params);

  sendGame: SendGame = (params) => this.request<SendGame>("sendGame", params);

  setGameScore: SetGameScore = (params) =>
    this.request<SetGameScore>("setGameScore", params);

  getGameHighScores: GetGameHighScores = (params) =>
    this.request<GetGameHighScores>("getGameHighScores", params);

  //TODO: consider combining into one abstract method callAPI, with multipart/json req type parameter
  protected abstract request<T extends Method>(
    methodName: string,
    params?: Parameters<T>[0],
  ): ReturnType<T>;

  protected abstract multipartRequest<T extends Method>(
    methodName: string,
    formData: FormData,
  ): ReturnType<T>;
}
