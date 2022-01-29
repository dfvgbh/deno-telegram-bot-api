# Telegram Chatbot

## Usage Examples

### Send Text Message

```ts
import { TelegramBot, UpdateType } from "https://deno.land/x/telegram_chatbot/mod.ts"
import "https://deno.land/x/dot_env@0.2.0/load.ts"

const TOKEN = Deno.env.get("TOKEN");
if (!TOKEN) throw new Error("Bot token is not provided");
const bot = new TelegramBot(TOKEN);

bot.on(UpdateType.Message, async (message: any) => {

    const text = message.message.text || "I can't hear you";

    await bot.sendMessage({ chat_id: message.message.chat.id, text: `echo ${text}` })

});

bot.run({
    polling: true,
});

```

### Send Text File

```ts
import { TelegramBot, UpdateType } from "https://deno.land/x/telegram_chatbot/mod.ts"
import "https://deno.land/x/dot_env@0.2.0/load.ts"

const TOKEN = Deno.env.get("TOKEN");
if (!TOKEN) throw new Error("Bot token is not provided");
const bot = new TelegramBot(TOKEN);

bot.on(UpdateType.Message, async (message: any) => {
  const text = message.message.text || "I can't hear you";
  await bot.sendDocument({
    chat_id: message.message.chat.id,
    document: new File([text], "echo.txt"),
  });
});

bot.run({
  polling: true,
});
```

