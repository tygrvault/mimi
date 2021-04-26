module.exports = (message, queue) => {
    message.channel.send(`Stopped music as I was disconnected from the channel.`);
};