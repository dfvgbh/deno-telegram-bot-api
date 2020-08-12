/**
 * Type definitions for objects from "Telegram Passport" section in official API docs
 * @see https://core.telegram.org/bots/api#telegram-passport
 */

/**
 * @see https://core.telegram.org/bots/api#passportdata
 */
export interface PassportData {
  data: EncryptedPassportElement[];
  credentials: EncryptedCredentials;
}

/**
 * @see https://core.telegram.org/bots/api#passportfile
 */
export interface PassportFile {
  file_id: string;
  file_unique_id: string;
  file_size: number;
  file_date: number;
}

/**
 * @see https://core.telegram.org/bots/api#encryptedpassportelement
 */
export interface EncryptedPassportElement {
  type: string;
  data?: string;
  phone_number?: string;
  email?: string;
  files?: PassportFile[];
  front_side?: PassportFile;
  reverse_side?: PassportFile;
  selfie?: PassportFile;
  translation?: PassportFile[];
  hash: string;
}

/**
 * @see https://core.telegram.org/bots/api#encryptedcredentials
 */
export interface EncryptedCredentials {
  data: string;
  hash: string;
  secret: string;
}

/**
 * @see https://core.telegram.org/bots/api#passportelementerror
 */
export type PassportElementError =
  | PassportElementErrorDataField
  | PassportElementErrorFrontSide
  | PassportElementErrorReverseSide
  | PassportElementErrorSelfie
  | PassportElementErrorFile
  | PassportElementErrorFiles
  | PassportElementErrorTranslationFile
  | PassportElementErrorTranslationFiles
  | PassportElementErrorUnspecified;

/**
 * @see https://core.telegram.org/bots/api#passportelementerrordatafield
 */
export interface PassportElementErrorDataField {
  source: string;
  type: string;
  field_name: string;
  data_hash: string;
  message: string;
}

/**
 * @see https://core.telegram.org/bots/api#passportelementerrorfrontside
 */
export interface PassportElementErrorFrontSide {
  source: string;
  type: string;
  file_hash: string;
  message: string;
}

/**
 * @see https://core.telegram.org/bots/api#passportelementerrorreverseside
 */
export interface PassportElementErrorReverseSide {
  source: string;
  type: string;
  file_hash: string;
  message: string;
}

/**
 * @see https://core.telegram.org/bots/api#passportelementerrorselfie
 */
export interface PassportElementErrorSelfie {
  source: string;
  type: string;
  file_hash: string;
  message: string;
}

/**
 * @see https://core.telegram.org/bots/api#passportelementerrorfile
 */
export interface PassportElementErrorFile {
  source: string;
  type: string;
  file_hash: string;
  message: string;
}

/**
 * @see https://core.telegram.org/bots/api#passportelementerrorfiles
 */
export interface PassportElementErrorFiles {
  source: string;
  type: string;
  file_hashes: string[];
  message: string;
}

/**
 * @see https://core.telegram.org/bots/api#passportelementerrortranslationfile
 */
export interface PassportElementErrorTranslationFile {
  source: string;
  type: string;
  file_hash: string;
  message: string;
}

/**
 * @see https://core.telegram.org/bots/api#passportelementerrortranslationfiles
 */
export interface PassportElementErrorTranslationFiles {
  source: string;
  type: string;
  file_hashes: string[];
  message: string;
}

/**
 * @see https://core.telegram.org/bots/api#passportelementerrorunspecified
 */
export interface PassportElementErrorUnspecified {
  source: string;
  type: string;
  element_hash: string;
  message: string;
}
