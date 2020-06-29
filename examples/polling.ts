import {
  TelegramBot,
  UpdateType,
} from "https://deno.land/x/telegram_bot_api/mod.ts";

const TOKEN = ""; // bot token
const bot = new TelegramBot(TOKEN);

// if webhook is set up, it should be deleted before switching to polling
await bot.deleteWebhook();

bot.run({
  // polling accepts options described in https://core.telegram.org/bots/api#getupdates
  polling: {
    timeout: 30, // defaults to 15s
  },
});

// UpdateType supports all telegram update types https://core.telegram.org/bots/api#update
// callback type matches provided UpdateType
bot.on(UpdateType.Message, async ({ message }) => {
  const chatId = message.chat.id;

  await bot.sendSticker({
    chat_id: chatId,
    sticker:
      "CAACAgIAAxkBAAL8WV75-kCnWs9hcYMfI9ate169VHLsAAJdAgAC3PKrB6IOmSPgo_bnGgQ",
  });
});
