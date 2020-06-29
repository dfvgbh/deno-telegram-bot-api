import { TelegramBot } from "../telegram-bot/telegram-bot.ts";
import { GetUpdates } from "../types/getting-updates/methods.ts";
import { UpdatesCallback, UpdatesStrategy } from "./updates-strategy.ts";

export type PollingOptions = Parameters<GetUpdates>[0];

const DEFAULT_POLLING_OPTIONS: PollingOptions = {
  timeout: 15,
};

export class Polling implements UpdatesStrategy {
  private isActive = false;
  private options: PollingOptions = {
    ...DEFAULT_POLLING_OPTIONS,
  };
  private updatesCallback?: UpdatesCallback;

  constructor(private readonly telegramBot: TelegramBot) {}

  run(updatesCallback: UpdatesCallback, options: PollingOptions = {}) {
    this.stop();
    this.isActive = true;
    this.updatesCallback = updatesCallback;
    this.options = {
      ...this.options,
      ...options,
    };

    return this.poll();
  }

  async poll() {
    if (!this.isActive) return;

    try {
      const updates = await this.telegramBot.getUpdates(this.options);

      if (updates.length && this.updatesCallback) {
        this.options = {
          ...this.options,
          offset: updates[updates.length - 1].update_id + 1,
        };

        if (this.isActive) {
          this.updatesCallback(updates);
        }
      }
    } catch (error) {
      this.updatesCallback && this.updatesCallback(undefined, error);
    } finally {
      await this.poll();
    }
  }

  stop() {
    this.isActive = false;
  }
}
