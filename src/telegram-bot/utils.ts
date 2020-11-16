import { Update } from "../types/getting-updates/objects.ts";
import {
  CallbackQueryUpdateEvent,
  ChannelPostUpdateEvent,
  ChosenInlineResultUpdateEvent,
  EditedChannelPostUpdateEvent,
  EditedMessageUpdateEvent,
  InlineQueryUpdateEvent,
  isCallbackQueryUpdate,
  isChannelPostUpdate,
  isChosenInlineResultUpdate,
  isEditedChannelPostUpdate,
  isEditedMessageUpdate,
  isInlineQueryUpdate,
  isMessageUpdate,
  isPollAnswerUpdate,
  isPollUpdate,
  isPreCheckoutQueryUpdate,
  isShippingQueryUpdate,
  MessageUpdateEvent,
  PollAnswerUpdateEvent,
  PollUpdateEvent,
  PreCheckoutQueryUpdateEvent,
  ShippingQueryUpdateEvent,
  UpdateErrorEvent,
  UpdateEvent,
} from "../types/getting-updates/update-helpers.ts";

export function toUpdateEvent(
  update: Update,
): UpdateEvent | UpdateErrorEvent {
  if (isMessageUpdate(update)) {
    return new MessageUpdateEvent(update);
  }
  if (isEditedMessageUpdate(update)) {
    return new EditedMessageUpdateEvent(update);
  }
  if (isChannelPostUpdate(update)) {
    return new ChannelPostUpdateEvent(update);
  }
  if (isEditedChannelPostUpdate(update)) {
    return new EditedChannelPostUpdateEvent(update);
  }
  if (isInlineQueryUpdate(update)) {
    return new InlineQueryUpdateEvent(update);
  }
  if (isChosenInlineResultUpdate(update)) {
    return new ChosenInlineResultUpdateEvent(update);
  }
  if (isCallbackQueryUpdate(update)) {
    return new CallbackQueryUpdateEvent(update);
  }
  if (isShippingQueryUpdate(update)) {
    return new ShippingQueryUpdateEvent(update);
  }
  if (isPreCheckoutQueryUpdate(update)) {
    return new PreCheckoutQueryUpdateEvent(update);
  }
  if (isPollUpdate(update)) return new PollUpdateEvent(update);
  if (isPollAnswerUpdate(update)) {
    return new PollAnswerUpdateEvent(update);
  }
  return new UpdateErrorEvent({
    error: new Error("Unexpected update format"),
  });
}

export function makeEndpoint(url: string, token: string, methodName: string) {
  return `${url}${token}/${methodName}`;
}

export function buildFormData(initObject: { [key: string]: any }) {
  const formData = new FormData();

  for (const [key, value] of Object.entries(initObject)) {
    if (
      typeof value === "object" && value !== null &&
      !(value instanceof Blob)
    ) {
      formData.append(key, JSON.stringify(value));
      continue;
    }
    formData.append(key, value);
  }

  return formData;
}

export function isBlob(value: unknown): value is Blob {
  return value instanceof Blob;
}

export function isFormData(value: unknown): value is FormData {
  return value instanceof FormData;
}
