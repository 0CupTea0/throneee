const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{
      
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("У вас нет прав");
    let rUser = bot.rUser;
    if(!args[0]) return bot.send("Вы не указали пользователя");
    if(!rUser) return bot.send("Пользователь не найден");
    let embed = new Discord.RichEmbed()
    .setDescription("КИКНУТ НАХУЙ")
    .setColor('#e22216')
    .addField("Администратор",message.author.username)
    .addField("Кикнул",`${rUser.user.username}`);
    
    message.guild.member(rUser).kick("123");
    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "kick"
};
