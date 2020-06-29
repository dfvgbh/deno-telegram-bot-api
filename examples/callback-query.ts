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
