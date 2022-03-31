 
 
const {MessageEmbed} = require('discord.js')
const db = require('quick.db')

module.exports = {
   name: 'sa-as',
   run: async(client, message, args) => {//Ç:D
  if(!message.member.hasPermission("ADMINISTRATOR")) return;
   
  if(args[0] == "aç"){
    db.set(`sa-as_${message.guild.id}`, true)
   const spany = new MessageEmbed()
    .setColor("#3f007f")
    .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
    .setDescription(`**:yess22: | SA-AS Başarıyla Açıldı**`)
    .setFooter(`🔮 Tüm Hakları Saklıdır.`)
    return message.channel.send(spany) 
  }   
  if(args[0] == "kapat"){
    db.delete(`sa-as_${message.guild.id}`)
   const spany = new MessageEmbed()
    .setColor("#3f007f")
    .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
    .setDescription(`**:yess22: | SA-AS Başarıyla Kapatıldı**`)
    .setFooter(`🔮 Tüm Hakları Saklıdır.`)
    return message.channel.send(spany) 
  }   
   const spany = new MessageEmbed()
    .setColor("#3f007f")
    .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
    .setDescription(`**:no2: | Yanlış Kullanım ?sa-as aç/kapat**`)
    .setFooter(`🔮 Tüm Hakları Saklıdır.`)
   if(!args[0]) return message.channel.send(spany)
     
   }
}
