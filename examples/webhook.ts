import {
  TelegramBot,
  UpdateType,
} from "https://deno.land/x/telegram_bot_api/mod.ts";

const TOKEN = ""; // bot token
const bot = new TelegramBot(TOKEN);

// for dev purposes you can use services like https://serveo.net/#manual
// ssh -R 80:localhost:3000 serveo.net - provides proxying requests from public HTTPS server to localhost:3000

// @see https://core.telegram.org/bots/api#setwebhook
bot.setWebhook({
  url: `https://your-url-from-serveo`,
});

// start Deno Server on port 3000
// hostname defaults to localhost
bot.run({
  webhook: {
    port: 3000,
  },
});

bot.on(UpdateType.Message, async ({ message }) => {
  const chatId = message.chat.id;

  await bot.sendMessage({
    chat_id: chatId,
    text: "There is no 🥄",
  });
});
