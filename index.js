const express = require("express");
const puppeteer = require("puppeteer");

const app = express();
const port = 3001;

app.get("/", async (req, res) => {
  const browser = await puppeteer.launch({
    executablePath:
      "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  });
  const page = await browser.newPage();

  await page.goto("https://google.com");
  const screenshot = await page.screenshot();

  await browser.close();

  // Envoyer la capture d'écran en tant que réponse à la requête HTTP
  res.set("Content-Type", "image/png");
  res.send(screenshot);
});

app.listen(port, () => {
  console.log("Serveur démarré sur le port", port);
});
