module.exports = {
    name: 'invite',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}invite',

    execute (client, message) {
        message.channel.send({
            embed: {
                color: 'D8DEE9',
                author: { name: 'Invite' },
                description: 'Click [here](https://discord.com/oauth2/authorize?client_id=801953775911960606&permissions=8&scope=bot) to invite me to your server! :D',
                footer: { text: 'Mimi by tyger | !help' }
            }
        })
    }
}