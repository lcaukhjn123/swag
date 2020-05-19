const Discord = require("discord.js");

bot.login();

bot.on("ready", async () => {
    console.log("(TutoDev) : En ligne");
    bot.user.setActivity("swagy")
});
