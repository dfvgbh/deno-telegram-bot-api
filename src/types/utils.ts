import { InputFile } from "./common/objects.ts";

/** Represents attached media files. */
export interface Attachments {
  [key: string]: InputFile;
}
