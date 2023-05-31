import type { Message, Client } from "whatsapp-web.js";

import { messages } from "./messages";

export type UtilFunction = (
  msg: Message,
  client: Client,
  notFound: string
) => void;

export type Options = { user: string; machine: string; time: number };

let options: Options[] = [];
let time: number = 0;

export const compare = (user: string, machine: string, time: number) => {
  options.push({
    user,
    machine,
    time,
  });
};

export const util: UtilFunction = (message, client, notFound) => {
  const action = options.map((option) => {
    while (true) {
      if (option.user === message.body && time === option.time) {
        client.sendMessage(message.from, option.machine);
        time++;
        return true;
      } else {
        return false;
      }
    }
  });
  if (!action.includes(true)) {
    client.sendMessage(message.from, notFound);
  }
  options = [];
};
