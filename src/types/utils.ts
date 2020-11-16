import { InputFile } from "./common/objects.ts";

/** Represents attached media files. */
export interface Attachments {
  [key: string]: InputFile;
}

export enum DiceEmoji {
  Dice = "🎲",
  Darts = "🎯",
  Basketball = "🏀",
  Football = "⚽",
  SlotMachine = "🎰",
}
