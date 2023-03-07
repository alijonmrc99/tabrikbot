const createImg = require("./createImg.js");
const createKrilImg = require("./createKrilImg.js");
const dotenv = require("dotenv");

dotenv.config();
const Telegraf = require("telegraf");
const bot = new Telegraf(process.env.TOKEN);
// console.log(process.env.TOKEN);

const helpMessage = `
Ushbu bot orqali qadrdonlaringizni ismlariga tabrik so'z yozishingiz mumkin!!!

Bot ikki tilda ham tabrik yoza oladi: 
Rus tilidagi tabrik uchun 
/ru kalit so'zidan so'ng ism yozing.
O'zbek tilidangi tabrik so'z uchun ism yozish yetarli

С помощью этого бота вы сможете писать поздравления с имени своих близких!!!

Бот умеет писать поздравления на двух языках:
Чтобы поздравить по русскому языку 
Введите имя после ключевого слова /ru.
Чтобы поздравить, достаточно написать имя.

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

  ctx.reply("Yaxshi hozir rasm tayyor bo'ladi");
  bot.telegram.sendChatAction(ctx.chat.id, "upload_photo");
  ctx.replyWithPhoto({
    source: Buffer.from(createImg(text), "base64"),
  });
});

bot.command("ru", (ctx) => {
  const text = ctx.message.text;
  const textArray = text.split(" ");
  if (textArray.length > 1) {
    textArray.shift();
    ctx.reply("Теперь изображение будет готово.");
    bot.telegram.sendChatAction(ctx.chat.id, "upload_photo");
    ctx.replyWithPhoto({
      source: Buffer.from(createKrilImg(textArray.join(" ")), "base64"),
    });
  } else {
    ctx.reply("Matn yubormadingiz");
  }
});

bot.on("text", (ctx) => {
  // ctx.reply("👍");
  ctx.reply("Yaxshi hozir rasm tayyor bo'ladi");
  bot.telegram.sendChatAction(ctx.chat.id, "upload_photo");
  ctx.replyWithPhoto({
    source: Buffer.from(createImg(ctx.message.text), "base64"),
  });
});

bot.launch();

// console.log(createImg("Assalom"));
