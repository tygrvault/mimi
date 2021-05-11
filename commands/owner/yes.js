module.exports = {
    name: 'yes',
    aliases: [],
    category: 'Owner',
    utilisation: '{prefix}yes',
    execute(message) {
        message.channel.send({embed: {
            title: ':)',
            image: {
                url: 'https://canary.discord.com/assets/da3651e59d6006dfa5fa07ec3102d1f3.svg',
            },
        }});
    }
}