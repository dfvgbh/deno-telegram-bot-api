import {
  TelegramBot,
  UpdateType,
} from "https://deno.land/x/telegram_bot_api/mod.ts";

const TOKEN = ""; // bot token
const bot = new TelegramBot(TOKEN);

// as using webhooks requires public HTTPS server, proxying requests from such
// public server to localhost is a good alternative.
// e.g. https://burrow.io - for dev purposes

// @see https://core.telegram.org/bots/api#setwebhook
bot.setWebhook({
  url: `https://your-burrow-url.io/${TOKEN}`, // token as pathname is recommended
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
    console.error(error);
  }),
);
