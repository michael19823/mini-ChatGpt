import { test } from "node:test";
import assert from "node:assert/strict";
import { parseFeed, normalizeItems } from "../src/news/index.ts";
import { parseStooqCsv } from "../src/prices.ts";

test("parseFeed handles RSS <item> feeds", () => {
  const xml = `<rss><channel>
    <item><title>Kazatomprom cuts uranium output</title>
      <link>https://ex.com/a</link><guid>a</guid>
      <description>Supply falls next year.</description>
      <pubDate>Mon, 14 Jul 2026 08:00:00 GMT</pubDate></item>
    <item><title>OPEC agrees output cut</title><link>https://ex.com/b</link><guid>b</guid></item>
  </channel></rss>`;
  const items = parseFeed(xml, "rss");
  assert.equal(items.length, 2);
  assert.equal(items[0].title, "Kazatomprom cuts uranium output");
  assert.equal(items[0].url, "https://ex.com/a");
  assert.equal(items[0].summary, "Supply falls next year.");
  assert.ok(items[0].publishedAt.startsWith("2026-07-14"));
});

test("parseFeed handles Atom <entry> feeds with attribute links (EDGAR-style)", () => {
  const xml = `<feed xmlns="http://www.w3.org/2005/Atom">
    <entry><title>8-K - ACME CORP (0001234) (Filer)</title>
      <link rel="alternate" href="https://www.sec.gov/filing/1"/>
      <summary>Material event.</summary>
      <updated>2026-07-14T12:00:00-04:00</updated>
      <id>urn:acme:1</id></entry>
  </feed>`;
  const items = parseFeed(xml, "edgar");
  assert.equal(items.length, 1);
  assert.equal(items[0].url, "https://www.sec.gov/filing/1");
  assert.equal(items[0].id, "urn:acme:1");
  assert.ok(items[0].publishedAt.startsWith("2026-07-14"));
});

test("parseFeed decodes entities and strips embedded tags", () => {
  const xml = `<rss><channel><item>
    <title>Grain &amp; fertilizer prices &lt;jump&gt;</title><guid>x</guid>
  </item></channel></rss>`;
  const [item] = parseFeed(xml, "rss");
  assert.equal(item.title, "Grain & fertilizer prices <jump>");
});

test("normalizeItems de-dupes by id and sorts newest-first", () => {
  const items = normalizeItems([
    { id: "a", title: "old", publishedAt: "2026-01-01T00:00:00Z" },
    { id: "b", title: "new", publishedAt: "2026-07-01T00:00:00Z" },
    { id: "a", title: "dup", publishedAt: "2026-01-01T00:00:00Z" },
  ]);
  assert.equal(items.length, 2);
  assert.equal(items[0].title, "new");
});

test("parseStooqCsv extracts the close price", () => {
  const csv = "Symbol,Date,Time,Open,High,Low,Close,Volume\nCCJ.US,2026-07-14,22:00:00,70.1,71.5,69.8,70.42,1234567";
  assert.equal(parseStooqCsv(csv), 70.42);
});

test("parseStooqCsv returns null for N/D or malformed rows", () => {
  assert.equal(parseStooqCsv("Symbol,Date,Time,Open,High,Low,Close,Volume\nXXX.US,N/D,N/D,N/D,N/D,N/D,N/D,N/D"), null);
  assert.equal(parseStooqCsv("garbage"), null);
});
