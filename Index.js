const Discord = require ("discord.js") // require the discord.js wrapper
const client = new Discord.Client() // Declare client to be a new Discord Client (bot)
/*
Code Below provides info about the bot 
once it's ready
*/
client.once("ready", () => {
  console.log(`[STATUS] ${client.user.tag} is now online!\n[INFO] Bot by robot`)
});
/* Client when detects a message 
then execute the code */
client.on("message", async message =>{
  if (message.content.startsWith("!ping"))
  {
    message.channel.send(`The client websocket latency is ${client.ws.ping}ms (values in milliseconds)`)
  }
});
/* Client when detects 
a new member join */
client.on("guildMemberAdd", async member => {
  let channel = member.guild.channels.cache.find(c => c.name === 'welcome')
  let WELCOME = new Discord.MessageEmbed()
  .setTitle('New User Has Joined!')
  .setDescription(`Welcome To Our Server ${member.user} we are happy to have you! you are member number ${member.guild.memberCount}!`)
  .setColor('BLUE')
  .setThumbnail(client.user.avatarURL)
  .setTimestamp()
  .setFooter('Thanks For Joining!')
  channel.send(🌍〢chat)
})
client.login("ODI5MDYwMjU4NjE4MDE1NzU1.YGyoiA.HBofJBCLkzn0dxss59AlQCAPjH8 "); // Login with the token make sure to add it when starting
