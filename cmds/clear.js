const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    try{
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("У вас нет прав");
    if(args[0]>100) return bot.send("пошёл нахуй мне похуй(меньше 100 указал быстро!)");
    if(args[0]<1) return bot.send("нахуй пошёл мне похуй (больше 1 указал сука!");
    message.channel.bulkDelete(args[0]).then(() =>{
        message.channel.send(`Удалено ${args[0]} сообщений`).then(msg => msg.delete(15*1000));
    });
    bot.send(botmessage);
}catch(err){
    console.log(err.name)
}
};
module.exports.help = {
    name: "clear"
};
