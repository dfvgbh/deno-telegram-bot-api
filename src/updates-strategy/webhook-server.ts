import { UpdatesCallback } from "./updates-strategy.ts";
import { UpdatesStrategy } from "./updates-strategy.ts";
import {
  HTTPOptions,
  serve,
  Server,
} from "https://deno.land/std/http/server.ts";

export interface WebhookServerParams extends HTTPOptions {
  /** Defaults to `/` */
  pathname?: string;
}

export class WebhookServer implements UpdatesStrategy {
  private server?: Server;
  private updatesCallback?: UpdatesCallback;
  private readonly decoder = new TextDecoder();

  async run(updatesCallback: UpdatesCallback, params: WebhookServerParams) {
    this.stop();
    this.updatesCallback = updatesCallback;

    try {
      const { pathname = "/", ...httpOptions } = params;
      this.server = serve(httpOptions);

      for await (const req of this.server) {
        if (req.url !== pathname) continue;

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
