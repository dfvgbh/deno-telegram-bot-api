import { CallbackQuery, Message, Poll, PollAnswer } from "../common/objects.ts";
import { ChosenInlineResult, InlineQuery } from "../inline-mode/objects.ts";
import { PreCheckoutQuery, ShippingQuery } from "../payments/objects.ts";
import { Update } from "./objects.ts";

export enum UpdateType {
  Error = "UPDATE_ERROR",
  Message = "MESSAGE_UPDATE",
  EditedMessage = "EDITED_MESSAGE_UPDATE",
  ChannelPost = "CHANNEL_POST_UPDATE",
  EditedChannelPost = "EDITED_CHANNEL_POST_UPDATE",
  InlineQuery = "INLINE_QUERY_UPDATE",
  ChosenInlineResult = "CHOSEN_INLINE_RESULT_UPDATE",
  CallbackQuery = "CALLBACK_QUERY_UPDATE",
  ShippingQuery = "SHIPPING_QUERY_UPDATE",
  PreCheckoutQuery = "PRE_CHECKOUT_QUERY_UPDATE",
  Poll = "POLL_UPDATE",
  PollAnswer = "POLL_ANSWER_UPDATE",
}

export abstract class UpdateEvent extends Event {
  abstract readonly payload: Update;
}

interface BaseUpdate {
  update_id: number;
}

export interface UpdateError {
  error: Error;
}

export class UpdateErrorEvent extends Event {
  constructor(public readonly error: UpdateError) {
    super(UpdateType.Error);
  }
}

export function isErrorUpdateEvent(event: Event): event is UpdateErrorEvent {
  return !!(event as UpdateErrorEvent).error;
}

export interface MessageUpdate extends BaseUpdate {
  message: Message;
}

export function isMessageUpdate(update: Update): update is MessageUpdate {
  return !!(update as MessageUpdate).message;
}

export class MessageUpdateEvent extends UpdateEvent {
  constructor(public readonly payload: MessageUpdate) {
    super(UpdateType.Message);
  }
}

export interface EditedMessageUpdate extends BaseUpdate {
  edited_message: Message;
}

export function isEditedMessageUpdate(
  update: Update,
): update is EditedMessageUpdate {
  return !!(update as EditedMessageUpdate).edited_message;
}

export class EditedMessageUpdateEvent extends UpdateEvent {
  constructor(public readonly payload: EditedMessageUpdate) {
    super(UpdateType.EditedMessage);
  }
}

export interface ChannelPostUpdate extends BaseUpdate {
  channel_post: Message;
}

export function isChannelPostUpdate(
  update: Update,
): update is ChannelPostUpdate {
  return !!(update as ChannelPostUpdate).channel_post;
}

export class ChannelPostUpdateEvent extends UpdateEvent {
  constructor(public readonly payload: ChannelPostUpdate) {
    super(UpdateType.ChannelPost);
  }
}

export interface EditedChannelPostUpdate extends BaseUpdate {
  edited_channel_post: Message;
}

export function isEditedChannelPostUpdate(
  update: Update,
): update is EditedChannelPostUpdate {
  return !!(update as EditedChannelPostUpdate).edited_channel_post;
}

export class EditedChannelPostUpdateEvent extends UpdateEvent {
  constructor(public readonly payload: EditedChannelPostUpdate) {
    super(UpdateType.EditedChannelPost);
  }
}

export interface InlineQueryUpdate extends BaseUpdate {
  inline_query: InlineQuery;
}

export function isInlineQueryUpdate(
  update: Update,
): update is InlineQueryUpdate {
  return !!(update as InlineQueryUpdate).inline_query;
}

export class InlineQueryUpdateEvent extends UpdateEvent {
  constructor(public readonly payload: InlineQueryUpdate) {
    super(UpdateType.InlineQuery);
  }
}

export interface ChosenInlineResultUpdate extends BaseUpdate {
  chosen_inline_result: ChosenInlineResult;
}

export function isChosenInlineResultUpdate(
  update: Update,
): update is ChosenInlineResultUpdate {
  return !!(update as ChosenInlineResultUpdate).chosen_inline_result;
}

export class ChosenInlineResultUpdateEvent extends UpdateEvent {
  constructor(public readonly payload: ChosenInlineResultUpdate) {
    super(UpdateType.ChosenInlineResult);
  }
}

export interface CallbackQueryUpdate extends BaseUpdate {
  callback_query: CallbackQuery;
}

export function isCallbackQueryUpdate(
  update: Update,
): update is CallbackQueryUpdate {
  return !!(update as CallbackQueryUpdate).callback_query;
}

export class CallbackQueryUpdateEvent extends UpdateEvent {
  constructor(public readonly payload: CallbackQueryUpdate) {
    super(UpdateType.CallbackQuery);
  }
}

export interface ShippingQueryUpdate extends BaseUpdate {
  shipping_query: ShippingQuery;
}

export function isShippingQueryUpdate(
  update: Update,
): update is ShippingQueryUpdate {
  return !!(update as ShippingQueryUpdate).shipping_query;
}

export class ShippingQueryUpdateEvent extends UpdateEvent {
  constructor(public readonly payload: ShippingQueryUpdate) {
    super(UpdateType.ShippingQuery);
  }
}

export interface PreCheckoutQueryUpdate extends BaseUpdate {
  pre_checkout_query: PreCheckoutQuery;
}

export function isPreCheckoutQueryUpdate(
  update: Update,
): update is PreCheckoutQueryUpdate {
  return !!(update as PreCheckoutQueryUpdate).pre_checkout_query;
}

export class PreCheckoutQueryUpdateEvent extends UpdateEvent {
  constructor(public readonly payload: PreCheckoutQueryUpdate) {
    super(UpdateType.PreCheckoutQuery);
  }
}

export interface PollUpdate extends BaseUpdate {
  poll: Poll;
}

export function isPollUpdate(update: Update): update is PollUpdate {
  return !!(update as PollUpdate).poll;
}

export class PollUpdateEvent extends UpdateEvent {
  constructor(public readonly payload: PollUpdate) {
    super(UpdateType.Poll);
  }
}

export interface PollAnswerUpdate extends BaseUpdate {
  poll_answer: PollAnswer;
}

export function isPollAnswerUpdate(update: Update): update is PollAnswerUpdate {
  return !!(update as PollAnswerUpdate).poll_answer;
}

export class PollAnswerUpdateEvent extends UpdateEvent {
  constructor(public readonly payload: PollAnswerUpdate) {
    super(UpdateType.PollAnswer);
  }
}
