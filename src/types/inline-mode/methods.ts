/**
 * Type definitions for methods from "Inline mode" section in official API docs
 * @see https://core.telegram.org/bots/api#inline-mode
 */

import { InlineQueryResult } from "./objects.ts";

/**
 * @see https://core.telegram.org/bots/api#answerinlinequery
 */
export type AnswerInlineQuery = (params: {
  inline_query_id: string;
  results: InlineQueryResult[];
  cache_time?: number;
  is_personal?: boolean;
  next_offset?: string;
  switch_pm_text?: string;
  switch_pm_parameter?: string;
}) => Promise<true>;
