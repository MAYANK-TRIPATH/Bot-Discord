const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith("create")) {
        const url = message.content.split("create")[1];
        return message.reply({
            content: "Generting Short ID for" + url,
        });
    }
    message.reply({
        content: "Hi from Mayank",
    });
});

client.login("MTEzMzYyMTU4OTE3OTY0NjA2NA.GUsA4H.nm-K4UkXgpYxFUOEtdV0t6Tt7n4u9OAW8RdWcE");
