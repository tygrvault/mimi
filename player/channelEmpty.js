module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Music stopped as there is no more member(s) in the voice channel!`);
};