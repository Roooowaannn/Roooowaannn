const Discord = require ("discord.js")
const client = new Discord.Client()
client.once("ready",  () =>> {
console.log(`$(client.user.tag} is now online!
})
client.on("message",  async message =>{
 if (message.content.startsWith("!ping"))
 {
   message.channel.send(`The client websocket latency is $(client.ws.ping}ms  (values in milliseconds)`)
 }
});
client.on("guildMemberAdd", async member => {
let channel = member.guild.channels.cache.find(c => c.name === 'welcome')
let WELCOME = new Discord.MessageEmbed()
.setTitle('New User Has Joined!')
.setDescription('Welcome To Our Server') ${member.tag} we are happy to have you! you are member number ${member.guild.memberCount}!')
.setColor('BLUE')
.setTimestamp()
.setFooter('Thanks For Joining!')
channel.send(WELCOME)
})
client.login("MTE0MzIxNDM0MDI2NzMxOTM3Ng.GPcjeS.fZoCxA2Z7T8dHIwn8tMwpVAJP5R1oY72Kg2BZ4")
