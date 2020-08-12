import {
  TelegramBot,
  UpdateType,
} from "https://deno.land/x/telegram_bot_api/mod.ts";

/**
 * While exploring Telegram Bot API docs you can find some files should be send
 * via string “attach://<file_attach_name>”. The `attachments` property to the rescue.
 * This example shows how attach these files to method parameters.
 */

const TOKEN = "";
const bot = new TelegramBot(TOKEN);

bot.run({
  polling: true,
});

bot.on(UpdateType.Message, async ({ message }) => {
  const logo = await Deno.readFile(
    Deno.cwd() + "/examples/sending-files/logo.png",
  );

  await bot.sendDocument({
    chat_id: message.chat.id,
    document: new File(["hello world"], "greetings.txt"),
    thumb: "attach://logo",
    attachments: {
      logo: new Blob([logo.buffer]),
    },
  });
});
