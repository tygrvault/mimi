const exec = require('child_process').exec;

module.exports = {
    name: 'debug',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}debug',

    execute(client, message) {
        message.channel.send({
            embed: {
                color: 'EAC8C8',
                author: { name: 'Debug' },
                footer: { text: 'Mimi | !help | Nord Studios' },
                fields: [
                    { name: 'Voice connections', value: `${client.voice.connections.size}`, inline: true },
                ]
            }
        });
    },
};