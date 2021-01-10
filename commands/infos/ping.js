module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send('🏓 Pinging...').then(resultMessage => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp
            message.delete()
            message.channel.send(`Latency: ${ping}, API Latency: ${client.ws.ping}`)
        })
    },
};