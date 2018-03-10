const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log("Ready to no go!");
});

client.on("message", (message) => {

  if (!message.content.startsWith(config.prefix) || message.author.bot || !message.guild) return;

  if (message.content.startsWith(config.prefix + "1")) {
    message.channel.send("kanker!");
  } else
  if (message.content.startsWith(config.prefix + "wauw")) {
  	var channel = client.channels.find("name", "praat_kanaaltje");
  	channel.join()
		.then(connection => {
			console.log('Wauw!');
			const dispatcher = connection.playFile('./audio/wauw_og.mp3', { volume: 1.0 });
			dispatcher.on("start", start => { connection.player.streamingData.pausedTime = 0;})
			dispatcher.on("end", end => {channel.leave()});
		})
		.catch(err => console.log(err));
  } else
  if (message.content.startsWith(config.prefix + "yeah")) {
  	var channel = client.channels.find("name", "praat_kanaaltje");
  	channel.join()
		.then(connection => {
			console.log('Yeah!');
			const dispatcher = connection.playFile('./audio/letsgoja.mp3', { volume: 1.0 });
			dispatcher.on("start", start => { connection.player.streamingData.pausedTime = 0;})
			dispatcher.on("end", end => {channel.leave()});
		})
		.catch(err => console.log(err));
  } else
    if (message.content.startsWith(config.prefix + "cat")) {
  	var channel = client.channels.find("name", "praat_kanaaltje");
  	channel.join()
		.then(connection => {
			console.log('Wauw_cat!');
			const dispatcher = connection.playFile('./audio/wauw_cat.mp3', { volume: 1.0 });
			dispatcher.on("start", start => { connection.player.streamingData.pausedTime = 0;})
			dispatcher.on("end", end => {channel.leave()});
		})
		.catch(err => console.log(err));
  } else
    if (message.content.startsWith(config.prefix + "random")) {
  	var channel = client.channels.find("name", "praat_kanaaltje");
  	var random = Math.floor((Math.random() * 30) + 1);
  	channel.join()
		.then(connection => {
			console.log('Wauw_random!');
			const dispatcher = connection.playFile('./audio/random/' + random + '.wav', { volume: 1.0 });
			dispatcher.on("start", start => { connection.player.streamingData.pausedTime = 0;})
			dispatcher.on("end", end => {channel.leave()});
		})
		.catch(err => console.log(err));
  } else
    if (message.content.startsWith(config.prefix + "idubbz")) {
  	var channel = client.channels.find("name", "praat_kanaaltje");
  	channel.join()
		.then(connection => {
			console.log("I'm gay!");
			const dispatcher = connection.playFile('./audio/gay.mp3', { volume: 1.0 });
			dispatcher.on("start", start => { connection.player.streamingData.pausedTime = 0;})
			dispatcher.on("end", end => {channel.leave()});
		})
		.catch(err => console.log(err));
  }
      if (message.content.startsWith(config.prefix + "help")) {
      	const emojiDylan = client.emojis.find("name", "Dylan");

      message.channel.send(emojiDylan + "\n\n !!wauw - Wauw \n !!cat - Cat Wauw \n !!random - Random Wauw \n !!idubbz - ... \n !!help - deze pagina \n\n Leer je commands kankerlijer.");
  }
});

client.login(config.token);