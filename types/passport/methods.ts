/**
 * Type definitions for methods from "Telegram Passport" section in official API docs
 * @see https://core.telegram.org/bots/api#telegram-passport
 */

import { PassportElementError } from "./objects.ts";

/**
 * @see https://core.telegram.org/bots/api#setpassportdataerrors
 */
export type SetPassportDataErrors = (params: {
  user_id: number;
  errors: PassportElementError[];
}) => Promise<true>;
