module.exports = (message, queue) => {
    message.channel.send(`Music stopped as there is no more member(s) in the voice channel!`);
};