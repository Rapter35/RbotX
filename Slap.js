const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./lgn.json');

client.on('message', async msg => {
	if (msg.content.startsWith(`${prefix}slap`)) {
		const Slapped = msg.mentions.users.first()
		if (!Slapped) return msg.reply('Your Slapping at Air, is a fly bothering you?! try @ing someone!');
		
		msg.channel.send(`Wham, Bam, Slam! ${Slapped}, You have been Slaped by <@${msg.author.id}>!`)
		msg.channel.send('http://gph.is/1h9hiR5')
	}
});
