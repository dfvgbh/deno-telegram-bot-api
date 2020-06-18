# deno-telegram-bot-api

Simple, typed wrapper for Telegram bot API. 

##Features
- Telegram API types and methods covered with TypeScript (~70%)
- Pooling updates
- Types system follows official [Telegram API](https://core.telegram.org/bots/api) 
with enhancements for "At most one of the optional parameters"-like definitions

##In progress
- Webhooks
- Error handling
- Tests

##Examples
```ts
import { TelegramBot } from "../telegram-bot.ts";
import { UpdateType } from "../types/update.ts";

// provide your token here or in environment
const TOKEN = "";
const bot = new TelegramBot(TOKEN || Deno.env.get("TOKEN") as string);

// you can provide options such described https://core.telegram.org/bots/api#getupdates
// by default pooling timeout is 5s
bot.startPolling();

// UpdateType supports all telegram update types https://core.telegram.org/bots/api#update
// When you pass UpdateType, you will get proper typed callback related to this particular update type
bot.on(UpdateType.Message, ({ message }) => {
  bot.sendMessage({
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
});

bot.on(UpdateType.CallbackQuery, ({ callback_query }) => {
  if (callback_query.data === "red") {
    bot.sendMessage({
      chat_id: callback_query.from.id,
      text: "🐰",
    });
  }

  if (callback_query.data === "blue") {
    bot.sendMessage({
      chat_id: callback_query.from.id,
      text: "Good morning, Mr. Anderson.",
    });
  }

  bot.answerCallbackQuery({
    callback_query_id: callback_query.id,
  });
});
```


