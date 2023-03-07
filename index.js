const createImg = require("./createImg.js");
const dotenv = require("dotenv");

dotenv.config();
const Telegraf = require("telegraf");
const bot = new Telegraf(process.env.TOKEN);
// console.log(process.env.TOKEN);

const helpMessage = `
Say something to me
/start - start the bot
/help - command reference
/eco -
/eco msg - command reference
`;

bot.start((ctx) => {
  ctx.reply("Hi I am Echo bot");
  ctx.reply(helpMessage);
});

bot.command("echo", (ctx) => {
  const text = ctx.message.text;
  const textArray = text.split(" ");
  if (textArray.length > 1) {
    textArray.shift();
    console.log(textArray.join(" "));
    ctx.reply(textArray.join(" "));
  } else {
    ctx.reply("siz eco commadasini ishlatdingiz");
  }
});

bot.command("id", async (ctx) => {
  let input = ctx.message.text;
  let inputArray = input.split(" ");
});

bot.launch();

// console.log(createImg("Assalom"));
