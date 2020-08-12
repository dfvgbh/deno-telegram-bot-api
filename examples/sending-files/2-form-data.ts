import {
  TelegramBot,
  UpdateType,
} from "https://deno.land/x/telegram_bot_api/mod.ts";

/**
 * Methods for sending media accept `FormData` created somewhere else in your code.
 */

const TOKEN = "";
const bot = new TelegramBot(TOKEN);

bot.run({
  polling: true,
});

bot.on(UpdateType.Message, async ({ message }) => {
  const form = new FormData();
  form.append("chat_id", message.chat.id.toString());
  form.append("document", new Blob(["hello world"]), "greetings.txt");

  await bot.sendDocument(form);
});
