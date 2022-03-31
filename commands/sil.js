 
 
const {MessageEmbed} = require('discord.js')
const db = require('quick.db')

module.exports = {
   name: 'sil',
   run: async(client, message, args) => {//Ç:D
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
    let mesaj = args[0] 
   const spany = new MessageEmbed()
    .setColor("#3f007f")
    .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
    .setDescription(`**:no2: | Lütfen Rakam Belirtiniz**`)
    .setFooter(`🔮 Tüm Hakları Saklıdır.`)
    if(!mesaj || isNaN(mesaj))return message.channel.send(spany)
     
   
     if(mesaj > 600) {
       message.delete()
    const spany = new MessageEmbed()
      .setColor("#3f007f")
      .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
      .setDescription(`**:no2: | 600 Dan Fazla Mesaj Silemezsin**`)
      .setFooter(`🔮 Tüm Hakları Saklıdır.`)
      return message.channel.send(spany)       
    }

        if (mesaj < 101) {
      message.channel.bulkDelete(args[0]).then(msg => {
         const spany = new MessageEmbed()
           .setColor("#3f007f")
           .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
           .setDescription(`**:yess22: |** ${msg.size} **Adet Mesaj Silindi!**`)
           .setFooter(`🔮 Tüm Hakları Saklıdır.`)
           return message.author.send(spany)       
          })
        }
        if (mesaj > 100 && mesaj < 200) {
          message.channel.bulkDelete(100).then(() => {
            message.channel.bulkDelete(mesaj - 100);
          });
        }
        if (mesaj == 200) {;
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
        }
        if (mesaj > 200 && mesaj < 300) {
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100).then(() => {
            message.channel.bulkDelete(mesaj - 200);
          });
        }
        if (mesaj == 300) {
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
        }
        if (mesaj > 300 && mesaj < 400) {
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100).then(() => {
            message.channel.bulkDelete(mesaj - 300);
          });
        }
        if (mesaj == 400) {
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
        }
        if (mesaj > 400 && mesaj < 500) {
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100).then(() => {
            message.channel.bulkDelete(mesaj - 400);
          });
        }
        if (mesaj == 500) {
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
        }
        if (mesaj > 500 && mesaj < 600) {

          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100).then(() => {
            message.channel.bulkDelete(mesaj - 500);
          });
        }
        if (mesaj == 600) {
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
          message.channel.bulkDelete(100);
        }

   }
}
