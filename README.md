# deno-telegram-bot-api
🦕 wrapper for Telegram Bot API 

## Features
- Fully typed API follows official [Telegram API](https://core.telegram.org/bots/api) 
- Minimal domain-specific knowledge required
- Polling and Webhook server for getting updates

## In progress
- Sending files
- Standardize error handling
- Tests

## Examples
[examples directory](https://github.com/dfvgbh/deno-telegram-bot-api/tree/master/examples)

### Polling
```ts
import {
  TelegramBot,
  UpdateType,
} from "https://deno.land/x/telegram_bot_api/mod.ts";

const TOKEN = ""; // bot token
const bot = new TelegramBot(TOKEN);

// if webhook is set up, it should be deleted before switching to polling
await bot.deleteWebhook();

bot.run({
  // polling accepts options described in https://core.telegram.org/bots/api#getupdates
  polling: {
    timeout: 30, // defaults to 15s
  },
});

// UpdateType supports all telegram update types https://core.telegram.org/bots/api#update
// callback type matches provided UpdateType
bot.on(UpdateType.Message, async ({ message }) => {
  const chatId = message.chat.id;

  await bot.sendSticker({
    chat_id: chatId,
    sticker: "CAACAgIAAxkBAAL8WV75-kCnWs9hcYMfI9ate169VHLsAAJdAgAC3PKrB6IOmSPgo_bnGgQ",
  });
});
```

### Webhook
```ts
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
```

### Webhook with [oak](https://github.com/oakserver/oak)
```ts
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
  const { chat: { id }, text = '🙈' } = message;

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


```

### Callback query
```ts
import {
  TelegramBot,
  UpdateType,
} from "https://deno.land/x/telegram_bot_api/mod.ts";

const TOKEN = ""; // bot token
const bot = new TelegramBot(TOKEN);

bot.run({
  polling: true,
});

bot.on(UpdateType.Message, async ({ message }) => {
  const chatId = message.chat.id;

  // send message with keyboard
  await bot.sendMessage({
    chat_id: chatId,
    text: "Chose a pill",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "🔴", callback_data: "red" },
          { text: "🔵", callback_data: "blue" },
        ],
      ],
    },
  });
});

bot.on(UpdateType.CallbackQuery, async ({ callback_query }) => {
  const { id, data, from } = callback_query;
  const text = data === "red" ? "🐰" : "Good morning, Mr. Anderson.";

  await bot.sendMessage({
    chat_id: from.id,
    text,
  });

  await bot.answerCallbackQuery({
    callback_query_id: id,
  });
});

bot.on(
  UpdateType.Error,
  ({ error }) => console.error("Glitch in the Matrix", error.stack),
);
```
