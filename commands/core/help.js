module.exports = {
    name: 'help',
    aliases: ['<@750301046580183051>', 'h'],
    category: 'Core',
    utilisation: '{prefix}help',

    execute(client, message, args) {
        message.channel.send({
            embed: {
                color: 'EAC8C8',
                author: { name: 'Help' },
                footer: { text: 'Mimi | !help | Nord Studios' },
                timestamp: new Date(),
                description: 'Hello! My name is Mimi! :wave:\nMy prefix is `!`, to find some of my commands use `!commands`.\nDeveloped by (Tyger)[https://www.tyger796.com]\nPublished by (Nord Studios)[https://www.nordstudios.org]',
            },
        },
    )},
};