# deno-telegram-bot-api
🦕 wrapper for Telegram Bot API 

## Features
- Fully typed API follows the latest official [Telegram API](https://core.telegram.org/bots/api) (v4.9)
- Minimal domain-specific knowledge required
- Polling and Webhook server for getting updates
- Simple way for sending media files

## Examples

The example of bot which responds with a file containing user message inside.

```ts
import { TelegramBot, UpdateType } from "https://deno.land/x/telegram_bot_api/mod.ts"

const TOKEN = Deno.env.get("TOKEN");
if (!TOKEN) throw new Error("Bot token is not provided");
const bot = new TelegramBot(TOKEN);

bot.run({
  polling: true,
});

bot.on(UpdateType.Message, async ({ message }) => {
  const text = message.text || "I can't hear you";
  await bot.sendDocument({
    chat_id: message.chat.id,
    document: new File([text], "echo.txt"),
  });
});
```

Let's run the example above right from the terminal:
```shell script
# MacOS, Linux
TOKEN=your-bot-token deno run --allow-net --allow-env https://deno.land/x/telegram_bot_api/examples/sending-files/01-simple-media.ts
```
```shell script
# Windows
set TOKEN=your-bot-token && deno run --allow-net --allow-env https://deno.land/x/telegram_bot_api/examples/sending-files/01-simple-media.ts
```

For all examples check the [examples directory](https://github.com/dfvgbh/deno-telegram-bot-api/tree/master/examples)

## In progress
- General error handling for specific cases
- Tests
