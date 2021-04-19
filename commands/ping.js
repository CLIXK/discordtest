module.exports = {
    description: 'A simple ping command',
    help: {
        name: 'ping'
    },
    async run(bot, message, args) {
        message.channel.send(
            `Pong! \`\`${new Date().getTime() - message.createdTimestamp}ms\`\``
        );
    }
};
