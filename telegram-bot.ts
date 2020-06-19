import { PollingParams, PollingRunner } from "./polling-runner.ts";
import {
  AnswerCallbackQuery,
  DeleteChatPhoto,
  DeleteChatStickerSet,
  DeleteMessage,
  EditMessageCaption,
  EditMessageLiveLocation,
  EditMessageMedia,
  EditMessageReplyMarkup,
  EditMessageText,
  ExportChatInviteLink,
  ForwardMessage,
  GetChat,
  GetChatAdministrators,
  GetChatMember,
  GetChatMembersCount,
  GetFile,
  GetMe,
  GetMyCommands,
  GetUpdates,
  GetUserProfilePhotos,
  KickChatMember,
  LeaveChat,
  Method,
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
  StopPoll,
  UnbanChatMember,
  UnpinChatMessage,
} from "./types/methods.ts";
import {
  CallbackQueryUpdate,
  CallbackQueryUpdateEvent,
  ChannelPostUpdate,
  ChannelPostUpdateEvent,
  ChosenInlineResultUpdate,
  ChosenInlineResultUpdateEvent,
  EditedChannelPostUpdate,
  EditedChannelPostUpdateEvent,
  EditedMessageUpdate,
  EditedMessageUpdateEvent,
  ErrorUpdate,
  ErrorUpdateEvent,
  InlineQueryUpdate,
  InlineQueryUpdateEvent,
  isCallbackQueryUpdate,
  isChannelPostUpdate,
  isChosenInlineResultUpdate,
  isEditedChannelPostUpdate,
  isEditedMessageUpdate,
  isErrorUpdateEvent,
  isInlineQueryUpdate,
  isMessageUpdate,
  isPollAnswerUpdate,
  isPollUpdate,
  isPreCheckoutQueryUpdate,
  isShippingQueryUpdate,
  MessageUpdate,
  MessageUpdateEvent,
  PollAnswerUpdate,
  PollAnswerUpdateEvent,
  PollUpdate,
  PollUpdateEvent,
  PreCheckoutQueryUpdate,
  PreCheckoutQueryUpdateEvent,
  ShippingQueryUpdate,
  ShippingQueryUpdateEvent,
  Update,
  UpdateEvent,
  UpdateType,
} from "./types/update.ts";

function makeEndpoint(token: string, methodName: string) {
  return `https://api.telegram.org/bot${token}/${methodName}`;
}

export class TelegramBot {
  // make private, decouple from polling
  public updatesEventTarget = new EventTarget();
  private polling = new PollingRunner();

  constructor(private readonly token: string) {}

  getMe: GetMe = () => this.methodRequest<GetMe>("getMe");
  sendMessage: SendMessage = (params) =>
    this.methodRequest<SendMessage>("sendMessage", params);
  forwardMessage: ForwardMessage = (params) =>
    this.methodRequest<ForwardMessage>("forwardMessage", params);
  sendPhoto: SendPhoto = (params) =>
    this.methodRequest<SendPhoto>("sendPhoto", params);
  sendAudio: SendAudio = (params) =>
    this.methodRequest<SendAudio>("sendAudio", params);
  sendDocument: SendDocument = (params) =>
    this.methodRequest<SendDocument>("sendDocument", params);
  sendVideo: SendVideo = (params) =>
    this.methodRequest<SendVideo>("sendVideo", params);
  sendAnimation: SendAnimation = (params) =>
    this.methodRequest<SendAnimation>("sendAnimation", params);
  sendVoice: SendVoice = (params) =>
    this.methodRequest<SendVoice>("sendVoice", params);
  sendVideoNote: SendVideoNote = (params) =>
    this.methodRequest<SendVideoNote>("sendVideoNote", params);
  sendMediaGroup: SendMediaGroup = (params) =>
    this.methodRequest<SendMediaGroup>("sendMediaGroup", params);
  sendLocation: SendLocation = (params) =>
    this.methodRequest<SendLocation>("sendLocation", params);
  editMessageLiveLocation: EditMessageLiveLocation = (params) =>
    this.methodRequest<EditMessageLiveLocation>(
      "editMessageLiveLocation",
      params,
    );
  stopMessageLiveLocation: StopMessageLiveLocation = (params) =>
    this.methodRequest<StopMessageLiveLocation>(
      "stopMessageLiveLocation",
      params,
    );
  sendVenue: SendVenue = (params) =>
    this.methodRequest<SendVenue>("sendVenue", params);
  sendContact: SendContact = (params) =>
    this.methodRequest<SendContact>("sendContact", params);
  sendPoll: SendPoll = (params) =>
    this.methodRequest<SendPoll>("sendPoll", params);
  sendDice: SendDice = (params) =>
    this.methodRequest<SendDice>("sendDice", params);
  sendChatAction: SendChatAction = (params) =>
    this.methodRequest<SendChatAction>("sendChatAction", params);
  getUserProfilePhotos: GetUserProfilePhotos = (params) =>
    this.methodRequest<GetUserProfilePhotos>("getUserProfilePhotos", params);
  getFile: GetFile = (params) => this.methodRequest<GetFile>("getFile", params);
  kickChatMember: KickChatMember = (params) =>
    this.methodRequest<KickChatMember>("kickChatMember", params);
  unbanChatMember: UnbanChatMember = (params) =>
    this.methodRequest<UnbanChatMember>("unbanChatMember", params);
  restrictChatMember: RestrictChatMember = (params) =>
    this.methodRequest<RestrictChatMember>("restrictChatMember", params);
  promoteChatMember: PromoteChatMember = (params) =>
    this.methodRequest<PromoteChatMember>("promoteChatMember", params);
  setChatAdministratorCustomTitle: SetChatAdministratorCustomTitle = (params) =>
    this.methodRequest<SetChatAdministratorCustomTitle>(
      "setChatAdministratorCustomTitle",
      params,
    );
  setChatPermissions: SetChatPermissions = (params) =>
    this.methodRequest<SetChatPermissions>("setChatPermissions", params);
  exportChatInviteLink: ExportChatInviteLink = (params) =>
    this.methodRequest<ExportChatInviteLink>("exportChatInviteLink", params);
  setChatPhoto: SetChatPhoto = (params) =>
    this.methodRequest<SetChatPhoto>("setChatPhoto", params);
  deleteChatPhoto: DeleteChatPhoto = (params) =>
    this.methodRequest<DeleteChatPhoto>("deleteChatPhoto", params);
  setChatTitle: SetChatTitle = (params) =>
    this.methodRequest<SetChatTitle>("setChatTitle", params);
  setChatDescription: SetChatDescription = (params) =>
    this.methodRequest<SetChatDescription>("setChatDescription", params);
  pinChatMessage: PinChatMessage = (params) =>
    this.methodRequest<PinChatMessage>("pinChatMessage", params);
  unpinChatMessage: UnpinChatMessage = (params) =>
    this.methodRequest<UnpinChatMessage>("unpinChatMessage", params);
  leaveChat: LeaveChat = (params) =>
    this.methodRequest<LeaveChat>("leaveChat", params);
  getChat: GetChat = (params) => this.methodRequest<GetChat>("getChat", params);
  getChatAdministrators: GetChatAdministrators = (params) =>
    this.methodRequest<GetChatAdministrators>("getChatAdministrators", params);
  getChatMembersCount: GetChatMembersCount = (params) =>
    this.methodRequest<GetChatMembersCount>("getChatMembersCount", params);
  getChatMember: GetChatMember = (params) =>
    this.methodRequest<GetChatMember>("getChatMember", params);
  setChatStickerSet: SetChatStickerSet = (params) =>
    this.methodRequest<SetChatStickerSet>("setChatStickerSet", params);
  deleteChatStickerSet: DeleteChatStickerSet = (params) =>
    this.methodRequest<DeleteChatStickerSet>("deleteChatStickerSet", params);
  answerCallbackQuery: AnswerCallbackQuery = (params) =>
    this.methodRequest<AnswerCallbackQuery>("answerCallbackQuery", params);
  setMyCommands: SetMyCommands = (params) =>
    this.methodRequest<SetMyCommands>("setMyCommands", params);
  getMyCommands: GetMyCommands = () =>
    this.methodRequest<GetMyCommands>("getMyCommands");
  editMessageText: EditMessageText = (params) =>
    this.methodRequest<EditMessageText>("editMessageText", params);
  editMessageCaption: EditMessageCaption = (params) =>
    this.methodRequest<EditMessageCaption>("editMessageCaption", params);
  editMessageMedia: EditMessageMedia = (params) =>
    this.methodRequest<EditMessageMedia>("editMessageMedia", params);
  editMessageReplyMarkup: EditMessageReplyMarkup = (params) =>
    this.methodRequest<EditMessageReplyMarkup>(
      "editMessageReplyMarkup",
      params,
    );
  stopPoll: StopPoll = (params) =>
    this.methodRequest<StopPoll>("stopPoll", params);
  deleteMessage: DeleteMessage = (params) =>
    this.methodRequest<DeleteMessage>("deleteMessage", params);
  getUpdates: GetUpdates = (params) =>
    this.methodRequest<GetUpdates>("getUpdates", params);

  on(
    eventType: UpdateType.Error,
    callback: (error: ErrorUpdate) => void,
  ): void;
  on(
    eventType: UpdateType.Message,
    callback: (update: MessageUpdate) => void,
  ): void;
  on(
    eventType: UpdateType.EditedMessage,
    callback: (update: EditedMessageUpdate) => void,
  ): void;
  on(
    eventType: UpdateType.ChannelPost,
    callback: (update: ChannelPostUpdate) => void,
  ): void;
  on(
    eventType: UpdateType.EditedChannelPost,
    callback: (update: EditedChannelPostUpdate) => void,
  ): void;
  on(
    eventType: UpdateType.InlineQuery,
    callback: (update: InlineQueryUpdate) => void,
  ): void;
  on(
    eventType: UpdateType.ChosenInlineResult,
    callback: (update: ChosenInlineResultUpdate) => void,
  ): void;
  on(
    eventType: UpdateType.CallbackQuery,
    callback: (update: CallbackQueryUpdate) => void,
  ): void;
  on(
    eventType: UpdateType.ShippingQuery,
    callback: (update: ShippingQueryUpdate) => void,
  ): void;
  on(
    eventType: UpdateType.PreCheckoutQuery,
    callback: (update: PreCheckoutQueryUpdate) => void,
  ): void;
  on(eventType: UpdateType.Poll, callback: (update: PollUpdate) => void): void;
  on(
    eventType: UpdateType.PollAnswer,
    callback: (update: PollAnswerUpdate) => void,
  ): void;
  on(eventType: UpdateType, callback: {
    (error: ErrorUpdate): void;
    (update: MessageUpdate): void;
    (update: EditedMessageUpdate): void;
    (update: ChannelPostUpdate): void;
    (update: EditedChannelPostUpdate): void;
    (update: InlineQueryUpdate): void;
    (update: ChosenInlineResultUpdate): void;
    (update: CallbackQueryUpdate): void;
    (update: ShippingQueryUpdate): void;
    (update: PreCheckoutQueryUpdate): void;
    (update: PollUpdate): void;
    (update: PollAnswerUpdate): void;
    (update: Update): void;
  }): void {
    this.updatesEventTarget.addEventListener(eventType, {
      handleEvent: (event: UpdateEvent | ErrorUpdateEvent) => {
        isErrorUpdateEvent(event)
          ? callback(event.error)
          : callback(event.payload);
      },
    });
  }

  startPolling(params: PollingParams = {}) {
    this.polling.start(params, this);
  }

  stopPolling() {
    this.polling.stop();
  }

  //TODO: make private
  handleUpdates(updates: Update[]) {
    for (const update of updates) {
      let updateEvent: UpdateEvent | undefined = undefined;

      if (isMessageUpdate(update)) {
        updateEvent = new MessageUpdateEvent(update);
      }
      if (isEditedMessageUpdate(update)) {
        updateEvent = new EditedMessageUpdateEvent(update);
      }
      if (isChannelPostUpdate(update)) {
        updateEvent = new ChannelPostUpdateEvent(update);
      }
      if (isEditedChannelPostUpdate(update)) {
        updateEvent = new EditedChannelPostUpdateEvent(update);
      }
      if (isInlineQueryUpdate(update)) {
        updateEvent = new InlineQueryUpdateEvent(update);
      }
      if (isChosenInlineResultUpdate(update)) {
        updateEvent = new ChosenInlineResultUpdateEvent(update);
      }
      if (isCallbackQueryUpdate(update)) {
        updateEvent = new CallbackQueryUpdateEvent(update);
      }
      if (isShippingQueryUpdate(update)) {
        updateEvent = new ShippingQueryUpdateEvent(update);
      }
      if (isPreCheckoutQueryUpdate(update)) {
        updateEvent = new PreCheckoutQueryUpdateEvent(update);
      }
      if (isPollUpdate(update)) updateEvent = new PollUpdateEvent(update);
      if (isPollAnswerUpdate(update)) {
        updateEvent = new PollAnswerUpdateEvent(update);
      }

      if (updateEvent) {
        this.updatesEventTarget.dispatchEvent(updateEvent);
      }
    }
  }

  //TODO: provide ReturnType
  private methodRequest<T extends Method>(
    methodName: string,
    params?: Parameters<T>[0],
  ): Promise<any> {
    return fetch(makeEndpoint(this.token, methodName), {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(params),
    }).then((response) => response.json())
      .then((body) => {
        if (body.ok) {
          return body.result;
        } else {
          const { error_code, description } = body;
          throw new Error(`${error_code}\n${description}`);
        }
      });
  }
}
