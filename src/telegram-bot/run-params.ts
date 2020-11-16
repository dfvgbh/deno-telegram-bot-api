import { PollingParams } from "../updates-strategy/polling.ts";
import { WebhookServerParams } from "../updates-strategy/webhook-server.ts";

export interface RunWithPollingParams {
  polling: PollingParams | true;
}

export function isRunWithPollingParams(
  params: RunParams,
): params is RunWithPollingParams {
  return !!(params as RunWithPollingParams).polling;
}

export interface RunWithWebhookParams {
  webhook: WebhookServerParams;
}

export function isRunWithWebhookParams(
  params: RunParams,
): params is RunWithWebhookParams {
  return !!(params as RunWithWebhookParams).webhook;
}

export type RunParams = RunWithPollingParams | RunWithWebhookParams;
