/**
 * Run the example from the shell
 * MacOS, Linux $:
 * TOKEN=your-bot-token WEBHOOK_URL=webhook-url PORT=3000 deno run --allow-net --allow-env https://deno.land/x/telegram_bot_api/examples/03-webhook.ts
 * Windows $:
 * set TOKEN=your-bot-token && set WEBHOOK_URL=webhook-url && set PORT=3000 && deno run --allow-net --allow-env https://deno.land/x/telegram_bot_api/examples/03-webhook.ts
 */

import {
  TelegramBot,
  UpdateType,
} from "https://deno.land/x/telegram_bot_api/mod.ts";

/**
 * This example shows how to set Webhook and run Webhook server on localhost.
 * Using webhooks requires a public HTTPS server. For dev purposes you may use
 * resources that provide proxying requests from public HTTPS server to localhost.
 * e.g. https://burrow.io
 * To run this example you need to provide url of such server as WEBHOOK_URL env variable.
 */

const TOKEN = Deno.env.get("TOKEN");
if (!TOKEN) throw new Error("Bot token is not provided");

const WEBHOOK_URL = Deno.env.get("WEBHOOK_URL");
if (!WEBHOOK_URL) throw new Error("Webhook url is not provided");

const PORT = parseInt(Deno.env.get("PORT") || '') || 3000;
const bot = new TelegramBot(TOKEN);

bot.on(UpdateType.Message, async ({ message }) => {
  const chatId = message.chat.id;

  await bot.sendMessage({
    chat_id: chatId,
    text: "There is no 🥄",
  });
});

bot.setWebhook({
  url: `${WEBHOOK_URL}/${TOKEN}`,
});

bot.run({
  webhook: {
    port: PORT,
    pathname: `/${TOKEN}`,
  },
});
