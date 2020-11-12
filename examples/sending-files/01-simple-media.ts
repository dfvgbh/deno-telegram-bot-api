/**
 * Try the example right from the terminal
 * MacOS, Linux $:
 * TOKEN=your-bot-token deno run --allow-net --allow-env https://deno.land/x/telegram_bot_api/examples/sending-files/01-simple-media.ts
 * Windows $:
 * set TOKEN=your-bot-token && deno run --allow-net --allow-env https://deno.land/x/telegram_bot_api/examples/sending-files/01-simple-media.ts
 */

import {
  TelegramBot,
  UpdateType,
} from "https://deno.land/x/telegram_bot_api/mod.ts";

/**
 * To make requests with media files it's allowed to put `Blob`s as parameters
 * where Telegram expects `InputFile`. Bot builds `FormData` from your json
 * and performs `multipart/form-data` automatically under the hood.
 *
 * In this example bot answers file with received message.
 */

const TOKEN = Deno.env.get("TOKEN");
if (!TOKEN) throw new Error("Bot token is not provided");
const bot = new TelegramBot(TOKEN);

bot.on(UpdateType.Message, async ({ message }) => {
  const text = message.text || "I can't hear you";
  await bot.sendDocument({
    chat_id: message.chat.id,
    document: new File([text], "echo.txt"),
  });
});

bot.run({
  polling: true,
});
