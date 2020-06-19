# deno-telegram-bot-api
Simple wrapper for Telegram bot API in 🦕

## Features
- Types for Telegram bot API (~70%)
- Pooling updates
- Types system follows official [Telegram API](https://core.telegram.org/bots/api) 
with enhancements for "At most one of the optional parameters"-like definitions

## In progress
- Docs
- Webhooks
- Tests

## Examples
```ts
import {
  TelegramBot,
  UpdateType,
} from "https://deno.land/x/deno_telegram_bot_api/mod.ts";

const TOKEN = ""; //your token
const bot = new TelegramBot(TOKEN);

// accepts options described https://core.telegram.org/bots/api#getupdates
// by default pooling timeout is 5s
bot.startPolling();

// UpdateType supports all telegram update types https://core.telegram.org/bots/api#update
// When you pass UpdateType, you will get properly typed callback
bot.on(UpdateType.Message, async ({ message }) => {
  try {
    await bot.sendMessage({
      chat_id: message.chat.id,
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
  } catch (error) {
    console.log(error);
  }
});

bot.on(UpdateType.CallbackQuery, ({ callback_query }) => {
  const { id, data, from } = callback_query;
  const text = data === "red" ? "🐰" : "Good morning, Mr. Anderson.";

  bot.sendMessage({
    chat_id: from.id,
    text,
  });

  bot.answerCallbackQuery({
    callback_query_id: id,
  });
});

bot.on(UpdateType.Error, (error) => console.error("Polling error", error));
```


