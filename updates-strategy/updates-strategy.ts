import { Update } from "../types/getting-updates/objects.ts";
import { PollingOptions } from "./polling.ts";
import { WebhookServerOptions } from "./webhook-server.ts";

export type UpdatesCallback = (
  updates: Update[] | undefined,
  error?: Error,
) => void;

export interface UpdatesStrategy {
  run(
    updatesCallback: UpdatesCallback,
    options?: PollingOptions | WebhookServerOptions,
  ): void;
  stop(): void;
}
