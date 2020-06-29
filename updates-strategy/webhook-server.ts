import { UpdatesCallback } from "./updates-strategy.ts";
import { UpdatesStrategy } from "./updates-strategy.ts";
import {
  serve,
  Server,
  HTTPOptions,
} from "https://deno.land/std/http/server.ts";

export type WebhookServerOptions = string | HTTPOptions;

export class WebhookServer implements UpdatesStrategy {
  private server?: Server;
  private updatesCallback?: UpdatesCallback;
  private readonly decoder = new TextDecoder();

  async run(updatesCallback: UpdatesCallback, options: WebhookServerOptions) {
    this.stop();
    this.updatesCallback = updatesCallback;

    try {
      this.server = serve(options);
      for await (const req of this.server) {
        const rawBody = await Deno.readAll(req.body);
        const decoded = this.decoder.decode(rawBody);
        const update = JSON.parse(decoded);

        this.updatesCallback([update]);
        req.respond({
          status: 200,
        });
      }
    } catch (error) {
      this.updatesCallback(undefined, error);
    }
  }

  stop() {
    try {
      this.server && this.server.close();
    } catch (error) {
      this.updatesCallback && this.updatesCallback(undefined, error);
    }
  }
}
