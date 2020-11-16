/**
 * Type definitions for methods from "Payments" section in official API docs
 * @see https://core.telegram.org/bots/api#payments
 */

import { InlineKeyboardMarkup, Message } from "../common/objects.ts";
import { LabeledPrice, ShippingOption } from "./objects.ts";

/**
 * @see https://core.telegram.org/bots/api#sendinvoice
 */
export type SendInvoice = (params: {
  chat_id: number;
  title: string;
  description: string;
  payload: string;
  provider_token: string;
  start_parameter: string;
  currency: string;
  prices: LabeledPrice[];
  provider_data?: string;
  photo_url?: string;
  photo_size?: number;
  photo_width?: number;
  photo_height?: number;
  need_name?: boolean;
  need_phone_number?: boolean;
  need_email?: boolean;
  need_shipping_address?: boolean;
  send_phone_number_to_provider?: boolean;
  send_email_to_provider?: boolean;
  is_flexible?: boolean;
  disable_notification?: boolean;
  reply_to_message_id?: number;
  allow_sending_without_reply?: boolean;
  reply_markup?: InlineKeyboardMarkup;
}) => Promise<Message>;

/**
 * @see https://core.telegram.org/bots/api#answershippingquery
 */
export type AnswerShippingQuery = (params: {
  shipping_query_id: string;
  ok: boolean;
  shipping_options?: ShippingOption[];
  error_message?: string;
}) => Promise<true>;

/**
 * @see https://core.telegram.org/bots/api#answerprecheckoutquery
 */
export type AnswerPreCheckoutQuery = (params: {
  pre_checkout_query_id: string;
  ok: boolean;
  error_message?: string;
}) => Promise<true>;
