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

  // 10% chance of hanging forever (don't respond)
  if (Math.random() < 0.1) {
    console.log("Mock LLM: Hanging forever (10% chance)");
    return; // Hang forever - don't send response
  }

  // 20% chance of returning 500 error
  if (Math.random() < 0.2) {
    console.log("Mock LLM: Returning 500 error (20% chance)");
    return res.status(500).json({ error: "mock-llm error" });
  }

  // Normal response
  const reply = "This is a mock response from a pretend LLM.";
  const delayMs = 500 + randomInt(1500);
  await new Promise((r) => setTimeout(r, delayMs));

  return res.json({ completion: reply });
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log("mock-llm listening on", port));
