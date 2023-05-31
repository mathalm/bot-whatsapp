import { Message, Client } from "whatsapp-web.js";
import { compare, util } from "./util";

export const messages = (msg: Message, client: Client) => {
  compare("Iniciar", "Tempo 0", 0);
  compare("1", "E ai", 1);
  compare("2", "Aqui é o 2", 1);
  compare("3", "Se você quer 3, toma", 1);

  util(msg, client, "Código não encontrado. Por favor, tentar novamente");
};
