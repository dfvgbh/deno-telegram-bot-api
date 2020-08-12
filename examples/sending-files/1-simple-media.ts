import {
  TelegramBot,
  UpdateType,
} from "https://deno.land/x/telegram_bot_api/mod.ts";

/**
 * To perform multipart/form-data requests it's allowed to pass json objects
 * with `Blob`s as properties where Telegram expects `InputFile`.
 * Bot builds `FormData` from your json automatically under the hood.
 */

const TOKEN = "";
const bot = new TelegramBot(TOKEN);

bot.run({
  polling: true,
});

bot.on(UpdateType.Message, async ({ message }) => {
  await bot.sendDocument({
    chat_id: message.chat.id,
    document: new File(["hello world"], "greetings.txt"),
  });
});
