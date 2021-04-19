const fs = require('fs');

module.exports = (bot, Discord) => {
    fs.readdir('./commands', (err, files) => {
        if (err) return console.log(err);

        const jsfile = files.filter((f) => f.endsWith('.js'));

        if (jsfile.length <= 0) return console.log('Could not find commands!');

        jsfile.forEach((f) => {
            const props = require(`../commands/${f}`);
            bot.commands.set(props.help.name, props);
            console.log('Loading Command: ' + props.help.name);
        });
    });
};
