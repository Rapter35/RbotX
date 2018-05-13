const Discord = require('discord.js');
const client = new Discord.Client();
const commands = require('./cmd.js');
const { prefix, token} = require('./lgn.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', () => {
	client.user.setPresence({ game: { name: 'r!help' }})
});

client.on('message', async msg => {
  if (msg.content === `${prefix}ping`) {
    msg.reply('Pong! PongPongPingPingPongPingPong we gota gota songong going-ing @here!');
  }
});

client.on('message', async msg => {
  if (msg.content === `${prefix}hi`) {
	msg.channel.send(`Hello <@${msg.author.id}>, Im RbotX the DiscordBot made by <@415685627703721984>
if you want info on how this bot was created type r!info
and if you want get general help, type r!help
Bye for Now! Cya! XD`)
	}
});

client.login(token);
