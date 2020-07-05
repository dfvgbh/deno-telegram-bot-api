import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import {
  TelegramBot,
  UpdateType,
} from "https://deno.land/x/telegram_bot_api/mod.ts";

const TOKEN = ""; // bot token
const bot = new TelegramBot(TOKEN);

bot.setWebhook({
  url: `https://your-serveo-url.com/${TOKEN}`, // token as pathname is recommended
});

bot.on(UpdateType.Message, async ({ message }) => {
  const { chat: { id }, text = "🙈" } = message;

  await bot.sendMessage({
    chat_id: id,
    text,
  });
});

const router = new Router();

// listen on path provided in `setWebhook` method
router.post(`/${TOKEN}`, async (context) => {
  const { value } = await context.request.body();
  bot.handleUpdate(value); // use with any existing server to handle update
  context.response.status = 200;
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 3000 });
