/**
 * Type definitions for objects from "Payments" section in official API docs
 * @see https://core.telegram.org/bots/api#payments
 */

import { User } from "../common/objects.ts";

/**
 * @see https://core.telegram.org/bots/api#labeledprice
 */

export interface LabeledPrice {
  label: string;
  amount: number;
}

/**
 * @see https://core.telegram.org/bots/api#invoice
 */
export interface Invoice {
  title: string;
  description: string;
  start_parameter: string;
  currency: string;
  total_amount: number;
}

/**
 * @see https://core.telegram.org/bots/api#shippingaddress
 */
export interface ShippingAddress {
  country_code: string;
  state: string;
  city: string;
  street_line1: string;
  street_line2: string;
  post_code: string;
}

/**
 * @see https://core.telegram.org/bots/api#orderinfo
 */
export interface OrderInfo {
  name?: string;
  phone_number?: string;
  email?: string;
  shipping_address?: ShippingAddress;
}

/**
 * @see https://core.telegram.org/bots/api#shippingoption
 */
export interface ShippingOption {
  id: string;
  title: string;
  prices: LabeledPrice[];
}

/**
 * @see https://core.telegram.org/bots/api#successfulpayment
 */
export interface SuccessfulPayment {
  currency: string;
  total_amount: number;
  invoice_payload: string;
  shipping_option_id?: string;
  order_info?: OrderInfo;
  telegram_payment_charge_id: string;
  provider_payment_charge_id: string;
}

/**
 * @see https://core.telegram.org/bots/api#shippingquery
 */
export interface ShippingQuery {
  id: string;
  from: User;
  invoice_payload: string;
  shipping_address: ShippingAddress;
}

/**
 * @see https://core.telegram.org/bots/api#precheckoutquery
 */
export interface PreCheckoutQuery {
  id: string;
  from: User;
  currency: string;
  total_amount: number;
  invoice_payload: string;
  shipping_option_id?: string;
  order_info?: OrderInfo;
}
