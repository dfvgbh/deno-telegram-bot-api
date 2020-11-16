import { Update } from "../types/getting-updates/objects.ts";
import { PollingParams } from "./polling.ts";
import { WebhookServerParams } from "./webhook-server.ts";

export type UpdatesCallback = (
  updates?: Update[],
  error?: Error,
) => void;

export interface UpdatesStrategy {
  run(
    updatesCallback: UpdatesCallback,
    params?: PollingParams | WebhookServerParams,
  ): void;
  stop(): void;
}
