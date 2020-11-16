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
import { Method } from "../types/method.ts";
import { Polling, PollingParams } from "../updates-strategy/polling.ts";
import {
  UpdatesCallback,
  UpdatesStrategy,
} from "../updates-strategy/updates-strategy.ts";
import { WebhookServer } from "../updates-strategy/webhook-server.ts";
import { makeEndpoint, toUpdateEvent } from "./utils.ts";
import {
  isRunWithPollingParams,
  isRunWithWebhookParams,
  RunParams,
  RunWithPollingParams,
  RunWithWebhookParams,
} from "./run-params.ts";
import { TelegramApi } from "./telegram-api.ts";

const DEFAULT_POLLING_PARAMS: PollingParams = {
  timeout: 30,
};

const DEFAULT_SERVER_URL = "https://api.telegram.org/bot";

interface BotParams {
  token: string;
  serverURL: string;
}

interface BotInitParams {
  token: string;
  serverURL?: string;
}

export class TelegramBot extends TelegramApi {
  private readonly updatesEventTarget = new EventTarget();
  private updatesStrategy?: UpdatesStrategy;
  private params: BotParams;

  constructor(token: string);
  constructor(params: BotInitParams);
  constructor(params: string | BotInitParams) {
    super();
    if (typeof params === "string") {
      this.params = {
        token: params,
        serverURL: DEFAULT_SERVER_URL,
      };
    } else {
      this.params = {
        token: params.token,
        serverURL: params.serverURL || DEFAULT_SERVER_URL,
      };
    }
  }

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

  run(params: RunWithPollingParams): void;
  run(params: RunWithWebhookParams): void;
  run(params: RunParams): void {
    const updatesCallback: UpdatesCallback = (updates, error) => {
      if (error) {
        this.updatesEventTarget.dispatchEvent(new UpdateErrorEvent({ error }));
        return;
      }
      if (updates) {
        return this.handleUpdates(updates);
      }
    };

    if (isRunWithPollingParams(params)) {
      const pollingParams = params.polling === true
        ? DEFAULT_POLLING_PARAMS
        : params.polling;
      this.updatesStrategy = new Polling(this);
      return this.updatesStrategy.run(updatesCallback, pollingParams);
    }

    if (isRunWithWebhookParams(params)) {
      this.updatesStrategy = new WebhookServer();
      return this.updatesStrategy.run(updatesCallback, params.webhook);
    }
  }

  stop() {
    if (this.updatesStrategy) {
      this.updatesStrategy.stop();
    }
  }

  /** Handles update object from Telegram */
  handleUpdate(update: Update) {
    const updateEvent = toUpdateEvent(update);
    this.updatesEventTarget.dispatchEvent(updateEvent);
  }

  private handleUpdates(updates: Update[]) {
    for (const update of updates) {
      this.handleUpdate(update);
    }
  }

  protected request<T extends Method>(
    methodName: string,
    params?: Parameters<T>[0],
  ): ReturnType<T> {
    return fetch(
      makeEndpoint(this.params.serverURL, this.params.token, methodName),
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "connection": "keep-alive",
        },
        body: JSON.stringify(params),
      },
    ).then((response) => response.json())
      .then((body) => {
        if (body.ok) {
          return body.result;
        } else {
          // TODO: handle ResponseParameters https://core.telegram.org/bots/api#responseparameters
          // TODO: combine with duplicate in multipartRequest
          const { error_code, description } = body;
          throw new Error(`${error_code}\n${description}`);
        }
      }) as ReturnType<T>;
  }

  protected multipartRequest<T extends Method>(
    methodName: string,
    formData: FormData,
  ): ReturnType<T> {
    return fetch(
      makeEndpoint(this.params.serverURL, this.params.token, methodName),
      {
        method: "POST",
        headers: {
          "connection": "keep-alive",
        },
        body: formData,
      },
    ).then((response) => response.json())
      .then((body) => {
        if (body.ok) {
          return body.result;
        } else {
          // TODO: handle ResponseParameters https://core.telegram.org/bots/api#responseparameters
          const { error_code, description } = body;
          throw new Error(`${error_code}\n${description}`);
        }
      }) as ReturnType<T>;
  }
}
