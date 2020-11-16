/**
 * Type definitions for methods from "Getting updates" section in official API docs
 * @see https://core.telegram.org/bots/api#getting-updates
 */

import { InputFile } from "../common/objects.ts";
import { Update, WebhookInfo } from "./objects.ts";

/**
 * https://core.telegram.org/bots/api#getupdates
 */
export type GetUpdates = (params: {
  offset?: number;
  limit?: number;
  timeout?: number;
  allowed_updates?: string[];
}) => Promise<Update[]>;

/**
 * @see https://core.telegram.org/bots/api#setwebhook
 */
export type SetWebhook = (
  params: FormData | {
    url: string;
    certificate?: InputFile;
    ip_address?: string;
    max_connections?: number;
    allowed_updates?: string[];
    drop_pending_updates?: boolean;
  },
) => Promise<true>;

/**
 * @see https://core.telegram.org/bots/api#deletewebhook
 */
export type DeleteWebhook = (
  params: void | {
    drop_pending_updates?: boolean;
  },
) => Promise<true>;

/**
 * @see https://core.telegram.org/bots/api#getwebhookinfo
 */
export type GetWebhookInfo = () => Promise<WebhookInfo>;
