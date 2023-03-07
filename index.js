const createImg = require("./createImg.js");
const dotenv = require("dotenv");

dotenv.config();
const Telegraf = require("telegraf");
const bot = new Telegraf(process.env.TOKEN);
// console.log(process.env.TOKEN);

const helpMessage = `
Ushbu bot orqali qadrdonlaringizni ismlarni yozib tabrik so'z yozishigiz mumkin !!!

Boshlash uchun shunchaki menga ism yozing.
Misol uchun /Aziza
`;

bot.start((ctx) => {
  ctx.reply(`Assalomu aleykum ${ctx.message.from.first_name} xush kelibsiz!`);
  console.log(ctx.message.from.first_name);
  ctx.reply(helpMessage);
});

bot.command("Aziza", (ctx) => {
  const text = ctx.message.text.slice(1, ctx.message.text.length);
  console.log();

  ctx.reply("Yaxshi hozi rasm tayyor bo'ladi");
  bot.telegram.sendChatAction(ctx.chat.id, "upload_photo");
  ctx.replyWithPhoto({
    source: Buffer.from(createImg(text), "base64"),
  });
});

// bot.command("id", (ctx) => {
//   let input = ctx.message.text;
//   let inputArray = input.split(" ");
// });

bot.on("text", (ctx) => {
  // ctx.reply("👍");
  ctx.reply("Yaxshi hozi rasm tayyor bo'ladi");
  bot.telegram.sendChatAction(ctx.chat.id, "upload_photo");
  ctx.replyWithPhoto({
    source: Buffer.from(createImg(ctx.message.text), "base64"),
    caption: "Saom",
  });
});

bot.launch();

// console.log(createImg("Assalom"));
