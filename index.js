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

bot.on('message', jsonMsg => {
    const message = jsonMsg.toString();
  
    if (isPartyInviteMessage(message)) {
        this.inviter = message.split(" ")[1]
        if (this.inviter === "has") this.inviter = message.split(" ")[0].replace("-----------------------------\n", "") // Nons
        if (config.blacklist.users.includes(this.inviter)) {
            let sorryMsg = `You're on the blacklist for fragruns.`
            sorryMsg = addCharToString(sorryMsg, "⭍", 15);
            bot.chat("/msg " + this.inviter + " " + sorryMsg)
        } else {
        setTimeout(() => {
            bot.chat("/p join " + this.inviter)
        }, 100)
    }
      return
    }
  
    if (this.inviter) {
      if (isMessageYouJoinedParty(message)) {
        this.partyLeader = this.inviter
        this.inviter = 0
  
        setTimeout(() => {
            this.partyLeader = 0
            setTimeout(() => {
                bot.chat("/pc Donate to Klaas :D")
            }, 200)
            bot.chat("/p leave")
        }, 10000)
    } else if (isMessageYoureInParty(message)) {
        let pastInviter = this.inviter
        this.inviter = 0
  
        let sorryMsg = "Sorry, I'm already in a party with " + (this.partyLeader ? this.partyLeader : "someone") + ", try in a bit! uwu"
  
            sorryMsg = addCharToString(sorryMsg, "⭍", 15);
            bot.chat("/msg " + pastInviter + " " + sorryMsg)
            setTimeout((pastInviter) => {
                if (this.inviter === pastInviter || this.partyLeader == 0) bot.chat("/p leave") // In case it gets stuck
            }, 10000)
        }
    }
})
  
function isPartyInviteMessage(message) {
    return message.endsWith(" here to join!\n-----------------------------") && !message.includes(':')
}
  
function isMessageYouJoinedParty(message) {
    return message.endsWith(" party!") && !message.includes(':')
}
  
function isMessageYoureInParty(message) {
    return message.endsWith(" to join another one.") && !message.includes(':')
}
  
function addCharToString(string, chars, times) {
    for (let i = 0; i < times; i++) {
        let randomNumber = Math.floor(Math.random() * string.length + 1)
        let a = string.split("")
  
        a.splice(randomNumber, 0, chars)
        string = a.join("")
    }
    return string
}

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
