module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send(`🏓 Pinging...`);
        message.edit(`🏓 Pong!\nLatency is ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}\nAPI Latency ${Math.round(client.ping)}ms`);
    },
};