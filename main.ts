import DiscordJS, { Intents } from "discord.js";
import dotenv from "dotenv";

import * as card_gen from "./GICardGame/card_generator";
import * as ultils from "./GICardGame/ultils";
import * as game from "./GICardGame/game";

dotenv.config();

const bot = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

bot.on("ready", () => {
    console.log(`Logged in as ${bot.user?.tag}`); 
});

bot.on("messageCreate", (ctx) => {
    if(ctx.content == "ping"){
        ctx.reply({
            content: "pong"
        })
    }
});

bot.login(process.env.TOKEN);