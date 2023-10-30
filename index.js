
const Discord = require('discord.js');
const client = new Discord.Client();


const BOT_TOKEN = ""; 


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('guildMemberAdd', (member) => {
    const server_id = "1166723957773312111"; 
    const server = client.guilds.cache.get(server_id);
  
    // Sunucuyu bulamazsak hata mesajı gönderelim
    if (server) 
    {
    const welcomeMessage1 = `Merhaba  ${member.user} Hoş geldin 🎉`;
  
    member.send(welcomeMessage1);
    const botRole = member.guild.roles.cache.find(role => role.name === "bot");
    const memberRole = member.guild.roles.cache.find(role => role.name === "member");
    const welcomeMessage = `Hoş geldin ${member.user}! Sunucumuza katıldığın için teşekkür ederiz.`;
    
    // Mesajı göndermek istediğiniz kanalın ID'sini belirleyin
    const channelId = '1166723958259855524';
    // Kanalı bulun
    const channel = member.guild.channels.cache.get(channelId);
  
    // Kanalda hoş geldin mesajını gönderin
    if (channel) {
      channel.send(welcomeMessage);
    } 
  
    if (member.user.bot && botRole) {
        member.roles.add(botRole);
      }
    

      // Yeni üyeye rolü ver
      else if (memberRole) 
      {
        member.roles.add(memberRole);
      }
  
    
    }

        else if (!server){
        console.log("server not found.");
    }

});

client.login(BOT_TOKEN);
