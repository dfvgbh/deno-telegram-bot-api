/**
 * Run this example from the shell!
 * MacOS, Linux $:
 * TOKEN=your-bot-token WEBHOOK_URL=webhook-url PORT=3000 deno run --allow-net --allow-env https://deno.land/x/telegram_bot_api/examples/04-webhook-oak.ts
 * Windows $:
 * set TOKEN=your-bot-token && set WEBHOOK_URL=webhook-url && set PORT=3000 && deno run --allow-net --allow-env https://deno.land/x/telegram_bot_api/examples/04-webhook-oak.ts
 */

import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import {
  TelegramBot,
  UpdateType,
} from "https://deno.land/x/telegram_bot_api/mod.ts";

/**
 * This example shows how to connect existing server (Oak here) with Telegram bot.
 * More info about setting webhooks in ./03-webhook.ts example.
 */

const TOKEN = Deno.env.get("TOKEN");
if (!TOKEN) throw new Error("Bot token is not provided");

const WEBHOOK_URL = Deno.env.get("WEBHOOK_URL");
if (!WEBHOOK_URL) throw new Error("Webhook url is not provided");

const PORT = parseInt(Deno.env.get("PORT") || '') || 3000;

const bot = new TelegramBot(TOKEN);

bot.setWebhook({
  url: `${WEBHOOK_URL}/${TOKEN}`,
});

bot.on(UpdateType.Message, async ({ message }) => {
  const { chat: { id }, text = "🙈" } = message;

  await bot.sendMessage({
    chat_id: id,
    text,
  });
});

const router = new Router();

router.post(`/${TOKEN}`, async (context) => {
  const value = await context.request.body().value;
  bot.handleUpdate(value); // use with any existing server to handle update
  context.response.status = 200;
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: PORT });
