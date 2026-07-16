import { test } from "node:test";
import assert from "node:assert/strict";
import { parseAlpacaMessage, alpacaNewsToItem, AlpacaListener } from "../src/listeners/alpaca.ts";
import type { WebSocketLike } from "../src/listeners/types.ts";
import type { NewsItem } from "../src/types.ts";

test("parseAlpacaMessage handles batched arrays and junk", () => {
  assert.equal(parseAlpacaMessage('[{"T":"success","msg":"authenticated"}]').length, 1);
  assert.equal(parseAlpacaMessage('[{"T":"n","id":1,"headline":"x","created_at":"2026-07-14T00:00:00Z"}]')[0].T, "n");
  assert.equal(parseAlpacaMessage("not json").length, 0);
});

test("alpacaNewsToItem maps fields and appends symbols", () => {
  const item = alpacaNewsToItem({
    T: "n", id: 42, headline: "Kratos wins drone contract", summary: "big award",
    created_at: "2026-07-14T12:00:00Z", url: "https://x", symbols: ["KTOS", "AVAV"], source: "benzinga",
  });
  assert.equal(item.id, "alpaca:42");
  assert.equal(item.title, "Kratos wins drone contract");
  assert.match(item.summary ?? "", /\[KTOS, AVAV\]/);
  assert.equal(item.source, "alpaca:benzinga");
});

// A fake WebSocket the test drives manually.
class FakeWS implements WebSocketLike {
  sent: string[] = [];
  private handlers: Record<string, ((ev: unknown) => void)[]> = {};
  addEventListener(type: string, cb: (ev: unknown) => void): void {
    (this.handlers[type] ??= []).push(cb);
  }
  send(data: string): void {
    this.sent.push(data);
  }
  close(): void {
    this.emit("close", {});
  }
  emit(type: string, ev: unknown): void {
    (this.handlers[type] ?? []).forEach((cb) => cb(ev));
  }
}

test("AlpacaListener authenticates, subscribes, and pushes news", async () => {
  const fake = new FakeWS();
  const received: NewsItem[] = [];
  const listener = new AlpacaListener({ key: "k", secret: "s", connect: () => fake });
  void listener.start((n) => received.push(n));

  fake.emit("open", {});
  const auth = JSON.parse(fake.sent[0]);
  assert.equal(auth.action, "auth");
  assert.equal(auth.key, "k");

  fake.emit("message", { data: '[{"T":"success","msg":"authenticated"}]' });
  const sub = JSON.parse(fake.sent[1]);
  assert.equal(sub.action, "subscribe");
  assert.deepEqual(sub.news, ["*"]);

  fake.emit("message", { data: '[{"T":"n","id":7,"headline":"OPEC agrees output cut","created_at":"2026-07-14T00:00:00Z","symbols":["FRO"]}]' });
  assert.equal(received.length, 1);
  assert.equal(received[0].title, "OPEC agrees output cut");
  await listener.stop();
});

test("AlpacaListener does not reconnect after stop()", async () => {
  let connects = 0;
  const scheduled: (() => void)[] = [];
  const listener = new AlpacaListener({
    connect: () => {
      connects++;
      return new FakeWS();
    },
    schedule: (fn) => scheduled.push(fn),
  });
  void listener.start(() => {});
  assert.equal(connects, 1);
  await listener.stop();
  // A close after stop should not schedule/trigger a reconnect.
  scheduled.forEach((fn) => fn());
  assert.equal(connects, 1);
});
