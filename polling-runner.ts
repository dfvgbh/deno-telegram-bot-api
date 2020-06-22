import { TelegramBot } from "./telegram-bot.ts";
import { GetUpdates } from "./types/getting-updates/methods.ts";
import { ErrorUpdateEvent } from "./types/getting-updates/update-helpers.ts";

export type PollingParams = Parameters<GetUpdates>[0];

const DEFAULT_POLLING_PARAMS = {
  timeout: 5,
};

export class PollingRunner {
  isActive = false;
  params: PollingParams = DEFAULT_POLLING_PARAMS;
  //TODO: PollingRunner.onUpdate as option instead of TelegramBot injection
  bot?: TelegramBot;

  start(params: PollingParams, bot: TelegramBot) {
    this.stop();
    this.params = {
      ...DEFAULT_POLLING_PARAMS,
      ...params,
    };
    this.bot = bot;
    this.isActive = true;
    return this.run();
  }

  stop() {
    this.isActive = false;
  }

  async run() {
    if (!this.isActive || !this.bot) return;

    try {
      const updates = await this.bot.getUpdates(this.params);

      if (updates.length) {
        this.params = {
          ...this.params,
          offset: updates[updates.length - 1].update_id + 1,
        };
        this.bot.handleUpdates(updates);
      }
    } catch (error) {
      this.bot.updatesEventTarget.dispatchEvent(new ErrorUpdateEvent(error));
    } finally {
      await this.run();
    }
  }
}
