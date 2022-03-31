 
const {MessageEmbed} = require('discord.js')
const db = require("quick.db")

module.exports = {
   name: 'mute',
   run: async(client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    let member = message.mentions.users.first();
     
     
    if(args[0] == "at"){
     const yanlış = new MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(":no2: **| Yanlış Kullanım: ?mute at @kişi**")
     .setFooter("🔮 Tüm Hakları Saklıdır.")   
     if(!member) return message.channel.send(yanlış)
      
  
    if(member.id === message.guild.ownerID) {
      const spany = new MessageEmbed()
      .setColor("#3f007f")
      .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
      .setDescription(`**:no2: | Sunucu Sahibine Mute Atamazsın Dostum :thinking:**`)
      .setFooter(`🔮 Tüm Hakları Saklıdır.`)
     return message.channel.send(spany)
   }
     
   if(member.id === client.user.id) {
     const spany = new MessageEmbed()
      .setColor("#3f007f")
      .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
      .setDescription(`**:no2: | Bana Mute Atamazsın Dostum :thinking:**`)
      .setFooter(`🔮 Tüm Hakları Saklıdır.`)
      return message.channel.send(spany)
     }
     
    if(member.id === message.author.id) {
     const spany = new MessageEmbed()
      .setColor("#3f007f")
      .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
      .setDescription(`**:no2: | Kendi Kendine Mute Atamazsın Dostum :thinking:**`)
      .setFooter(`🔮 Tüm Hakları Saklıdır.`)
      return message.channel.send(spany)
    }
      
     const muteli = new MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(":no2: **| Bu Kişi Zaten Susturulmuş**")
     .setFooter("🔮 Tüm Hakları Saklıdır.")   
    if(db.get(`mute_${message.guild.id}_${member.id}`)) return message.channel.send(muteli)
      
     
      db.set(`mute_${message.guild.id}_${member.id}`, true)
        
    const spany = new MessageEmbed()
      .setColor("#3f007f")
      .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
      .setDescription(`:yess22: **|** ${member} **Başarıyla Susturuldu**`)
      .setFooter(`🔮 Tüm Hakları Saklıdır.`)
     return message.channel.send(spany)  
      
   }  
     
     
    if(args[0] == "kaldır"){  
    const yanlış = new MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(":no2: **| Yanlış Kullanım: ?mute kaldır @kişi**")
     .setFooter("🔮 Tüm Hakları Saklıdır.")   
     if(!member) return message.channel.send(yanlış)
      
   db.delete(`mute_${message.guild.id}_${member.id}`)
        
    const spany = new MessageEmbed()
      .setColor("#3f007f")
      .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
      .setDescription(`:yess22: **|** ${member} **Başarıyla Susturması Kaldırıldı**`)
      .setFooter(`🔮 Tüm Hakları Saklıdır.`)
     return message.channel.send(spany)  
      
      
  }

     
  const yanlış = new MessageEmbed()
   .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
   .setColor("#3f007f")
   .setDescription(":no2: **| Yanlış Kullanım: ?mute at @kişi / ?mute kaldır @kişi**")
   .setFooter("🔮 Tüm Hakları Saklıdır.")   
  if(!args[0]) return message.channel.send(yanlış)
     
  }
}
