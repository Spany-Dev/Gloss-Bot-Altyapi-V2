 
const {MessageEmbed} = require('discord.js')

module.exports = {
   name: 'öneri',
   run: async(client, message, args) => {

      if(!args[0]) return message.channel.send("Lütfen Önerinizi Yazınız.")
     
      message.channel.send("**:yess22: | Bota Öneri Komudunuz Gönderildi. Uygun Görülürse Yapılacaktır.**")
     
     client.channels.cache.get("782589032495710208").send(`${message.author} (**${message.author.id} | ${message.author.tag}**)\nÖneri Mesajı: **${args.slice(0).join(' ')}**`)
    
     
     
   }
}
