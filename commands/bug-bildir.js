 
const {MessageEmbed} = require('discord.js')

module.exports = {
   name: 'bug-bildir',
   run: async(client, message, args) => {

    if(!args[0]) return message.channel.send("Lütfen Bugunuzu Yazınız.")
     
    message.channel.send("**:yess22: | Bugunuz Gönderildi. Bot Üzerindeki Bug Doğruysa Dikkate Alınacaktır.**")
     
     client.channels.cache.get("782589032495710208").send(`${message.author} (**${message.author.id} | ${message.author.tag}**)\nBug Mesajı: **${args.slice(0).join(' ')}**`)
     
     
     
   }
}
