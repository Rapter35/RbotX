client.on('message', async msg => {
	if (msg.content.startsWith(`${prefix}getid`)) {
	const idmention = msg.mentions.users.first()
	if (!idmention) return msg.reply(`Your Client ID is ${msg.author.id}!`);
	
	msg.channel.send(`The Client ID of ${idmention} is ${idmention.id}`)
  }
});
