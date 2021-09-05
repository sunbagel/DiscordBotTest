// const Discord = require('discord.js');
// const { Client, Intents } = require('discord.js');

// const myIntents = new Intents();
// myIntents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES);

// const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
// const client = new Discord.Client();

// // discord.js import
// const Discord = require('discord.js');
// // node-fetch for making HTTP requests
// const fetch = require('node-fetch');

// // initialize client
// const client = new Discord.Client();


// client.once('ready', () => {
//     console.log('your boy is online');
// })

//pogged out of my seat

// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
// const { token } = require('./config.json');

const dotenv = require('dovenv');
dotenv.config();

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Ready!');
});

// Login to Discord with your client's token
// client.login(token);


client.login(process.env.TOKEN);













// // discord.js import
// const Discord = require('discord.js');
// // node-fetch for making HTTP requests
// const fetch = require('node-fetch');

// // initialize client
// const client = new Discord.Client();
// // my model URL
// API_URL = 'https://api-inference.huggingface.co/models/r3dhummingbird/DialoGPT-medium-joshua';

// // log out some info
// client.on('ready', () => {
//     console.log(`Logged in as ${client.user.tag}!`);
// });

// // when the bot receives a message
// // need async message because we are making HTTP requests
// client.on('message', async message => {
//     // ignore messages from the bot itself
//     if (message.author.bot) {
//         return;
//     }
//     // form the payload
//     const payload = {
//         inputs: {
//             text: message.content
//         }
//     };
//     // form the request headers with Hugging Face API key
//     const headers = {
//         'Authorization': 'Bearer ' + process.env.HUGGINGFACE_TOKEN
//     };

//     // set status to typing
//     message.channel.startTyping();
//     // query the server
//     const response = await fetch(API_URL, {
//         method: 'post',
//         body: JSON.stringify(payload),
//         headers: headers
//     });
//     const data = await response.json();
//     let botResponse = '';
//     if (data.hasOwnProperty('generated_text')) {
//         botResponse = data.generated_text;
//     } else if (data.hasOwnProperty('error')) { // error condition
//         botResponse = data.error;
//     }
//     // stop typing
//     message.channel.stopTyping();
//     // send message to channel as a reply
//     message.reply(botResponse);
// })

// client.login(process.env.DISCORD_TOKEN);