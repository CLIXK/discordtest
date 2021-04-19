module.exports = (bot) => {
    const memberCounter = require('../../counters/member-counter');
    console.log('Bot online');
    memberCounter(bot);
};
