const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
import { messages } from "./messages";

app.listen(port, "0.0.0.0", () => {
  console.log("Server está rodando na port: " + port);
});

const client = new Client({
  authStrategy: new LocalAuth({
    clientId: "1",
  }),
});

client.initialize();

client.on("qr", (qr: any) => {
  console.log(qr);
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Deu tudo certo! Estamos conectados...");
});

client.on("message", (msg: any) => {
  messages(msg, client);
});
