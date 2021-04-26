module.exports = {
    name: 'sayhi',
    aliases: [],
    category: 'Core',
    utilisation: '{prefix}sayhi',
    execute (client, message) {
        message.channel.send({
            embed: {
                color: 'D8DEE9',
                author: { name: 'Hi!' },
                description: 'Hey Twitter, My name is Mimi and I am a free and open source Discord music bot. If you wish to invite me to your server, please go to "mimi.nordstudios.org" or just visit the projects page on the Nord Studios website (link in bio).\n\nHappy to join the Nord family :heart:\nSee you soon 😉',
                footer: { text: 'SHH -> mimi.nordstudios.org/shh' }
            }
        })
    }
}