
const Discord = require('discord.js');
const client = new Discord.Client();


const BOT_TOKEN = ""; 


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('guildMemberAdd', (member) => {
    const server_id = "1166723957773312111"; 
    const server = client.guilds.cache.get(server_id);
  
    if (server) 
    {
    const welcomeMessage1 = `${member.user} Welcome 🎉`;
  
    member.send(welcomeMessage1);
    const botRole = member.guild.roles.cache.find(role => role.name === "bot"); // botrole
    const memberRole = member.guild.roles.cache.find(role => role.name === "member"); // memberrole
    const welcomeMessage = `Hoş geldin ${member.user}! Thank you for joining our server.`;
    
    // Determine the ID of the channel you want to send the message to
    const channelId = '1166723958259855524';
    // Find the channel
    const channel = member.guild.channels.cache.get(channelId);
  
    // Send welcome message on channel
    if (channel) {
      channel.send(welcomeMessage);
    } 
   //  Give the role to the new ( bot ) member
    if (member.user.bot && botRole) {
        member.roles.add(botRole); // bot role
      }
    

      // Give the role to the new member
      else if (memberRole) 
      {
        member.roles.add(memberRole); // member role 
      }
  
    
    }

        else if (!server){
        console.log("server not found.");
    }

});

client.login(BOT_TOKEN);
