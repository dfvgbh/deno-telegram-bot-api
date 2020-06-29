# deno-telegram-bot-api
🦕 wrapper for Telegram bot API 

## Features
- Fully typed API follows official [Telegram API](https://core.telegram.org/bots/api) 
with minimal domain specific knowledge required
- Pooling and Webhook server for getting updates

## In progress
- Connect webhook to existing server
- Sending files
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
import { TelegramBot, UpdateType } from 'https://deno.land/x/telegram_bot_api/mod.ts';

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
    text: 'There is no 🥄',
  });
});

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
