/**
 * Run the example right from the terminal
 * MacOS, Linux $:
 * TOKEN=your-bot-token deno run --allow-net --allow-env --allow-read https://deno.land/x/telegram_bot_api/examples/sending-files/03-file-attachments.ts
 * Windows $:
 * set TOKEN=your-bot-token && deno run --allow-net --allow-env --allow-read https://deno.land/x/telegram_bot_api/examples/sending-files/03-file-attachments.ts
 */

import {
  TelegramBot,
  UpdateType,
} from "https://deno.land/x/telegram_bot_api/mod.ts";

/**
 * While exploring Telegram Bot API you can find that some files should be send
 * via string “attach://<file_attach_name>”. The `attachments` parameter to the rescue.
 * This example shows how to attach this type of files to method parameters.
 */

const TOKEN = Deno.env.get("TOKEN");
if (!TOKEN) throw new Error("Bot token is not provided");
const bot = new TelegramBot(TOKEN);

bot.on(UpdateType.Message, async ({ message }) => {
  const logo = await Deno.readFile("examples/sending-files/logo.png");

  await bot.sendDocument({
    chat_id: message.chat.id,
    document: new File(["https://telegram.org/"], "telegram.txt"),
    thumb: "attach://logo",
    attachments: {
      logo: new Blob([logo.buffer]),
    },
  });
});

bot.run({
  polling: true,
});
