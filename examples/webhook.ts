import {
  TelegramBot,
  UpdateType,
} from "https://deno.land/x/telegram_bot_api/mod.ts";

const TOKEN = ""; // bot token
const bot = new TelegramBot(TOKEN);

// for dev purposes you can use services like https://serveo.net/#manual
// e.g.: ssh -R 80:localhost:3000 serveo.net - proxying requests from public HTTPS server to localhost:3000

// @see https://core.telegram.org/bots/api#setwebhook
bot.setWebhook({
  url: `https://your-serveo-url.com/${TOKEN}`, // token as pathname is recommended
});

// start Deno server on port 3000
bot.run({
  webhook: {
    // hostname: 0.0.0.0 - defaults to localhost
    port: 3000,
    pathname: `/${TOKEN}`,
  },
});

bot.on(UpdateType.Message, async ({ message }) => {
  const chatId = message.chat.id;

  await bot.sendMessage({
    chat_id: chatId,
    text: "There is no 🥄",
  });
});

bot.on(
  UpdateType.Error,
  (({ error }) => {
    console.log(error);
  }),
);
