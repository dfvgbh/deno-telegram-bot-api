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
export type SetWebhook = (params: {
  url: string;
  certificate?: InputFile;
  max_connections?: number;
  allowed_updates?: string[];
}) => Promise<true>;

/**
 * @see https://core.telegram.org/bots/api#deletewebhook
 */
export type DeleteWebhook = () => Promise<true>;

/**
 * @see https://core.telegram.org/bots/api#getwebhookinfo
 */
export type GetWebhookInfo = () => Promise<WebhookInfo>;
