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

## Donations
Thanks to [Freedom Cash](https://FreedomCash.org), we are already free.  
If you want to donate, you might consider donating to the [otherparty.co.uk](https://www.otherparty.co.uk/donate-crypto-the-other-party) to ensure people do not need to donate to victims but rather donate successfully to problem solvers.   
  
![direct-democracy](https://github.com/michael-spengler/sleep/assets/145258627/fe97b7da-62b4-4cf6-9be0-7b03b2f3095a)