import { Update } from "../types/getting-updates/objects.ts";
import {
  CallbackQueryUpdate,
  ChannelPostUpdate,
  ChosenInlineResultUpdate,
  EditedChannelPostUpdate,
  EditedMessageUpdate,
  InlineQueryUpdate,
  isErrorUpdateEvent,
  MessageUpdate,
  PollAnswerUpdate,
  PollUpdate,
  PreCheckoutQueryUpdate,
  ShippingQueryUpdate,
  UpdateError,
  UpdateErrorEvent,
  UpdateEvent,
  UpdateType,
} from "../types/getting-updates/update-helpers.ts";
import { Polling } from "../updates-strategy/polling.ts";
import {
  UpdatesCallback,
  UpdatesStrategy,
} from "../updates-strategy/updates-strategy.ts";
import {
  WebhookServer,
} from "../updates-strategy/webhook-server.ts";
import { toUpdateEvent } from "./helpers.ts";
import {
  isRunWithPollingOptions,
  isRunWithWebhookOptions,
  RunOptions,
  RunWithPollingOptions,
  RunWithWebhookOptions,
} from "./run-options.ts";
import { TelegramApi } from "./telegram-api.ts";

export class TelegramBot extends TelegramApi {
  private readonly updatesEventTarget = new EventTarget();
  private updatesStrategy?: UpdatesStrategy;

  on(
    eventType: UpdateType.Error,
    callback: (error: UpdateError) => void,
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
    (error: UpdateError): void;
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
      handleEvent: (event: UpdateEvent | UpdateErrorEvent) => {
        if (isErrorUpdateEvent(event)) {
          callback(event.error);
          return;
        }
        callback(event.payload);
      },
    });
  }

  /** @deprecated */
  startPolling(params: PollingParams = {}) {
    console.warn(
      "startPolling will removed after 06 Aug 2020. Pls, use run instead",
    );
    this.run({
      polling: params,
    });
  }

  /** @deprecated */
  stopPolling() {
    console.warn(
      "stopPolling will removed after 06 Aug 2020. Pls, use stop instead",
    );
    this.stop();
  }

  run(options: RunWithPollingOptions): void;
  run(options: RunWithWebhookOptions): void;
  run(options: RunOptions): void {
    const updatesCallback: UpdatesCallback = (updates, error) => {
      if (error) {
        this.updatesEventTarget.dispatchEvent(new UpdateErrorEvent({ error }));
        return;
      }
      if (updates) {
        return this.handleUpdates(updates);
      }
    };

    if (isRunWithPollingOptions(options)) {
      const pollingOptions = options.polling === true
        ? undefined
        : options.polling;
      this.updatesStrategy = new Polling(this);
      return this.updatesStrategy.run(updatesCallback, pollingOptions);
    }

    if (isRunWithWebhookOptions(options)) {
      this.updatesStrategy = new WebhookServer();
      return this.updatesStrategy.run(updatesCallback, options.webhook);
    }
  }

  stop() {
    if (this.updatesStrategy) {
      this.updatesStrategy.stop();
    }
  }

  private handleUpdates(updates: Update[]) {
    for (const update of updates) {
      const updateEvent = toUpdateEvent(update);
      this.updatesEventTarget.dispatchEvent(updateEvent);
    }
  }
}
