require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '!'
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles){
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

function presence(){
  client.user.setPresence({
      status: "online", //dnd, idle, invisible, online
      activity: {
          name: "Cantus",
          type: "PLAYING" //LISTENING, PLAYING, STREAMING, WATCHING
      }
  })
}

client.on("ready", () => {
    console.log("Estoy listo!");
    presence();
 });
 
client.on("message", (message) => {
  if(message.content === "ayy") {
    message.channel.send("Ayy, lmao!");
  }
  if(message.content === "wat") {
    message.channel.send("Say what?");
  }
  if(message.content === "lol") {
    message.channel.send("roflmaotntpmp");
  }

  if(!message.content.startsWith(prefix)/* || message.author.bot*/) return;

  //const args = message.content.slice(prefix.length).split(/ +/);

  if (message.content === prefix + 'all'){
    //client.commands.get('all').execute(message, args);
  }
  else if (message.content === prefix + 'team'){
    //client.commands.get('team').execute(client, message, args);
  }
  else if (message.content === prefix + 'teams'){
    //client.commands.get('teams').execute(client, message, args);
  }
});

client.login(process.env.BOT_TOKEN);