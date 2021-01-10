module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}ping',

    execute(client, message) {
        const msg = message.channel.send(`🏓 Pinging...`);

        msg.edit(`🏓 Pong!\nLatency is ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}\nAPI Latency ${Math.round(client.ping)}ms`);
    },
};