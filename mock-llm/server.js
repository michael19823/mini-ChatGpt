const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

function randomInt(n) {
  return Math.floor(Math.random() * n);
}

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.post("/complete", async (req, res) => {
  const content = (req.body && req.body.content) || "";
  console.log("Mock LLM got:", content);

  const reply = "This is a mock response from a pretend LLM.";
  const delayMs = 500 + randomInt(1500);
  await new Promise((r) => setTimeout(r, delayMs));

  return res.json({ completion: reply });
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log("mock-llm listening on", port));
