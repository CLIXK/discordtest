const prefix = process.env.PREFIX;

module.exports = (Discord, bot, message) => {
    if (message.author.bot) return;
    if (message.channel.type !== 'text') return;
    if (!message.content.startsWith(prefix)) return;
    // hello there ['hello', 'there']
    // !ban user reason ['user', 'reason']
    // Breaking Rules ['breaking', 'rules'] breaking rules
    // hello
    const MessageArray = message.content.split(' ');
    const cmd = MessageArray[0].slice(prefix.length);
    const args = MessageArray.slice(1);

    const commandfile = bot.commands.get(cmd);
    if (commandfile) {
        commandfile.run(bot, message, args, Discord);
    }
};
