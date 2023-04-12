[![Bot API Version](https://img.shields.io/badge/Bot%20API-v5.0-blue)](https://core.telegram.org/bots/api)

# !!!NOT SUPPORTED!!! 
## it won't work with latest Deno versions, feel free to fork and update as you wish
# deno-telegram-bot-api 
🦕 wrapper for Telegram Bot API 

Join Discord channel https://discord.gg/6VMcmxAnT8

## Features
- Fully typed API follows the official [Telegram API](https://core.telegram.org/bots/api) (v5.0)
- Minimal domain-specific knowledge required
- Polling and Webhook server for getting updates
- A simple way for sending media files

## Examples

For all examples check the [examples directory](https://github.com/dfvgbh/deno-telegram-bot-api/tree/master/examples)

The example of a bot which responds with a file containing a user message inside.

```ts
import { TelegramBot, UpdateType } from "https://deno.land/x/telegram_bot_api/mod.ts"

const TOKEN = Deno.env.get("TOKEN");
if (!TOKEN) throw new Error("Bot token is not provided");
const bot = new TelegramBot(TOKEN);

bot.on(UpdateType.Message, async ({ message }) => {
  const text = message.text || "I can't hear you";
  await bot.sendDocument({
    chat_id: message.chat.id,
    document: new File([text], "echo.txt"),
  });
});

bot.run({
  polling: true,
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
