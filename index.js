const mineflayer = require('mineflayer')
const Discord = require('discord.js')
const config = require('./config.json')
const client = new Discord.Client()

let token = config.token
let sending = false
let chatData= []

const bot = mineflayer.createBot({
  host: `${config.serverip}`,
  username: `${config.email}`,
  password: `${config.password}`,
  version: `${config.version}`,
  auth: `${config.accounttype}`
})

bot.on('kicked', function(reason) {
	bot.connect(bot)
})

const sleep = async (ms) => {
    await new Promise(res => {
        setTimeout(() => {
            res(0);
        }, ms);
    });
};

bot.once('spawn', async () => {
    console.log('Joined Hypixel.');
    await sleep(5000);
    bot.chat('/play sb');
    await sleep(5000);
    bot.chat('/play sb');

    console.log('Joined Skyblock.');
    await sleep(5000);
    bot.chat('/is');
    await sleep(5000);
    bot.chat('/is');

    console.log('Joined Island.');
	while (true) {
        await sleep(60000);
        bot.chat('/is') 
        setTimeout(() => {bot.chat('/play sb')}, 7000);
    }
});

bot.on("message", message => {
	if (sending == true) {
		chatData.push(`${message}`)
	}
})

client.on("ready", () => {
	client.channels.cache.find(channel => channel.name === 'general').send("@everyone bot is online")
});

client.on("message", async msg => {
    let args = msg.content.split(" ").slice(1)

    if(msg.content.startsWith("!runcmd")) {
        let toSend = args.join(" ")
        if(!toSend) return msg.reply("No args")

        bot.chat(toSend)
        sending = true
        msg.channel.send(`${msg.author.tag} just sent ${toSend}`)

        setTimeout(() => {
            sending = false
            msg.channel.send(chatData.join("\n"))
            chatData = []
        }, 750)
    }
}),

client.login(token)
