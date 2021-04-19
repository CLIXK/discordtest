module.exports = async (bot) => {
    const guild = bot.guilds.cache.get('833565996018958336');
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('833410038163832873');
        channel.setName(`Members: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count!');
    }, 5000);
};
