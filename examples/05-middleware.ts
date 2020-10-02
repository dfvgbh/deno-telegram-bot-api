/**
 * app
 * - mw 1 T1
 * - mw 2 T2
 * - mw 3 T3
 *
 *
 * app
 * - mw 1 (ctx, next1)   // next1 = (newCtx?) { mw2(newCtx || ctx, next2) }
 *   - operations
 *   - next1(ctx2) /// ctx2, next2  - mw2
 *     - operations
 *     - next2                      - mw3
 *     -operations
 *   - operations
 *
 *
 *
 *
 *
 *
 *
 *
 */





import { TelegramBot } from '../src/telegram-bot/telegram-bot.ts';
import { UpdateType } from '../src/types/getting-updates/update-helpers.ts';

const TOKEN = Deno.env.get("TOKEN");
if (!TOKEN) throw new Error("Bot token is not provided");
const bot = new TelegramBot(TOKEN);

const performance = async (msg, next) => {
  const start = performance.now();
  await next(); // pas data for next?
  const finish = performance.now();
  console.log(start - finish);
}

class UpdatesRouter {}
const updatesRouter = new UpdatesRouter();

updatesRouter.on(UpdateType.ChannelPost, (msg, next) => {
  console.log(msg);
});

class MessagesMiddleware {}
const messagesMiddleware = new MessagesMiddleware();

messagesMiddleware.on('/start', (msg, next) => {
  console.log(msg);
});

class CommandsMiddleware {}
const commandsMiddleware = new CommandsMiddleware();

commandsMiddleware.on('/help', (msg, next) => {
  console.log(msg);
});

updatesRouter.on(UpdateType.Message, messagesMiddleware.get()); // transform from T1
updatesRouter.on(UpdateType.Message, commandsMiddleware.get()); // to T2


bot.use(performance);
bot.use(updatesRouter.routes());

bot.run({
  polling: true
});

/**
 * Problems:
 * 1. Chained types transformations
 *
 *
 * Check:
 * go, python ...
 *
 */
