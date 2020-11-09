// Built By: Hyperz#0001
// Contribution By: calebrwalk5#6969

// Declare variables
const fs = require('fs');
const Discord = require('discord.js');
const ws = require('ws');
const { error } = require('console');
const client = new Discord.Client();



// Here is where you can set the bots status!
client.on('ready', () => {
client.user.setPresence({ activity: { name: `For Randy...`, type: `WATCHING` }, status: `idle` })
  .catch(console.error);
// Tells you the bot is online & ready in the console!
console.log(`${client.user.tag}, By Hyperz#0001 is now watching for Randy :D!`);
});

// Main function of bot
client.on('message', message => {
  if(message.content.includes === 'hyperz')
  message.channel.send('Hyperz is fucking amazing, literally change my mind, oh wait, you cant because Hyperz programmed me into saying this regardless of what my bot brain actually thinks... POGGERS!')
});

client.on('message', message => {
  if(message.content === 'ban randy') {
  message.channel.send('getrandyoutofhererightnowcommand <@743175243593416744>')
  message.channel.send('getrandyoutofhererightnowcommand <@765408075061919755>')
  message.channel.send('getrandyoutofhererightnowcommand <@719880686881734667>')
  message.channel.send('getrandyoutofhererightnowcommand <@713625510089064580>')
  message.channel.send('getrandyoutofhererightnowcommand <@765302140914237450>')
  message.channel.send('The commands have been entered, I cannot confirm or deny that they worked... (check the servers list of banned members...)')
  }
});

client.on('message', message => {
  if(message.content.includes === 'hyperz')
  message.channel.send('https://youtube.com/itzhyperz')
  wehaterandy();
});

client.on('message', message => {
  if(message.content.includes === 'randy')
  message.channel.send('Randy laughed at Hyperz shitty life #fuckrandy!')
  wehaterandy();
});

client.on('message', message => {
  if(message.content.includes === 'randy')
  wehaterandy();
});

// Caleb's functions
function wehaterandy() {
  client.channels.get('747930604624150532').send('we all hate Randy');
  client.users.get("Hyperz#0001").send("we hate randy message sent");
}
// Logs the bot in
client.login('your-bot-token-goes-here');

/* 
Built By: Hyperz#0001 
And calebrwalk5#6969
*/
