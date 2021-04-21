require('dotenv').config()

const Discord = require('discord.js');

const client = new Discord.Client({
        partials: ["MESSAGE"]
})

prefix = '*';

client.on('ready', () => {
    console.log('Blakes Bot started!')
})

function getUserFromMention(mention) {
	if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return client.users.cache.get(mention);
	}
}

function DiscordCrash(command, args, message)
{
    if (command === 'DiscordCrash')
    {
        if(args[0])
        {
            return message.reply("No Args Needed!");
        }
        message.delete();
        message.channel.send("https://tornadus.net/orange");
    }
}

function Blake(message)
{
    if(message.content === "Blake" || message.content === "blake" || message.content.includes("594666331346042891"))
    {
        message.channel.send("Give Master a Second");
    }
}

function VigilanteOnTop(message)
{
    if(message.content.includes("vigilante"))
    {
        message.channel.send("Vigilante.cc On Top!!!");
        message.react("😇");
    }
}

function Phoenix(message)
{
    if(message.content.includes("phoenix"))
    {
        message.channel.send("Imagine Using Phoenix Xd");
        message.react("🤮");
    }
}

function PfpGetter(command, args, message)
{
    if (command === 'pfp') {
        if (args[0]) {
            const user = getUserFromMention(args[0]);
            if (!user) {
                return message.reply('Please use a proper mention.');
            }
    
            return message.channel.send(`${user.username}'s pfp is: ${user.displayAvatarURL({ dynamic: true })}`);
        }
    
        return message.channel.send(`${message.author.username}'s pfp is : ${message.author.displayAvatarURL({ dynamic: true })}`);
    }
}

function UploadLoader(command, message)
{
    if(command === 'loader')
    {
        return message.channel.send("https://anonfiles.com/x565k4r2u8/VigilanteCsgo_Loader_v2.1_exe");
    }
}

function BulkDeletMsg(command, message)
{
    if (command === 'clear')
        {
            message.channel.bulkDelete(50);
            message.channel.send("50 Messages Deleted!");
        }
}


client.on('message', message => {
	//if (!message.content.startsWith(prefix)) return;

	const withoutPrefix = message.content.slice(prefix.length);
	const split = withoutPrefix.split(/ +/);
	const command = split[0];
	const args = split.slice(1);
    if (message.content.startsWith(prefix))
    {
        PfpGetter(command, args, message);
        DiscordCrash(command, args, message);
        UploadLoader(command, message);
        BulkDeletMsg(command, message);
    }

    Blake(message);

    VigilanteOnTop(message);

    Phoenix(message);

});

client.login(process.env.BOT_TOKEN);

//npm run devStart

// Set up repo
//git init
//git add .
//git commit -m "Creation"
//git remote add origin [add link assh version]
//git branch -M main


//Update repo
//git add .
//git commit -m "Update 1.2"
//git pull orgin main
//git push orgin main