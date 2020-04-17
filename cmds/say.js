const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Хули ты раскомандовался тут?");
    let botmessage = args.join(" ");
    message.delete().catch();
    bot.send(botmessage);
};
module.exports.help = {
    name: "say"
};
