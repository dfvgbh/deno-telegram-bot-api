/**
 * Run the example right from the terminal
 * MacOS, Linux $:
 * TOKEN=your-bot-token deno run --allow-net --allow-env https://deno.land/x/telegram_bot_api/examples/sending-files/02-form-data.ts
 * Windows $:
 * set TOKEN=your-bot-token && deno run --allow-net --allow-env https://deno.land/x/telegram_bot_api/examples/sending-files/02-form-data.ts
 */

import {
  TelegramBot,
  UpdateType,
} from "https://deno.land/x/telegram_bot_api/mod.ts";

/**
 * Methods for sending media also accept `FormData` created somewhere else in code.
 */

const TOKEN = Deno.env.get("TOKEN");
if (!TOKEN) throw new Error("Bot token is not provided");
const bot = new TelegramBot(TOKEN);

bot.on(UpdateType.Message, async ({ message }) => {
  const form = new FormData();
  form.append("chat_id", message.chat.id.toString());
  form.append("document", new Blob(["hello world"]), "greetings.txt");

  await bot.sendDocument(form);
});

bot.run({
  polling: true,
});
