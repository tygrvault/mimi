module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send('🏓 Pinging...').then(resultMessage => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp
            resultMessage.edit(`🏓 Pong!\nLatency: ${ping}\nAPI Latency: ${client.ws.ping}`)
        })
    },
};