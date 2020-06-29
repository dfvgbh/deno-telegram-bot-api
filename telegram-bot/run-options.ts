import { PollingOptions } from "../updates-strategy/polling.ts";
import { WebhookServerOptions } from "../updates-strategy/webhook-server.ts";

export interface RunWithPollingOptions {
  polling: PollingOptions | true;
}

export function isRunWithPollingOptions(
  options: RunOptions,
): options is RunWithPollingOptions {
  return !!(options as RunWithPollingOptions).polling;
}

export interface RunWithWebhookOptions {
  webhook: WebhookServerOptions;
}

export function isRunWithWebhookOptions(
  options: RunOptions,
): options is RunWithWebhookOptions {
  return !!(options as RunWithWebhookOptions).webhook;
}

export type RunOptions = RunWithPollingOptions | RunWithWebhookOptions;
