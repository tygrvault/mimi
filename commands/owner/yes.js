module.exports = {
    name: 'yes',
    aliases: [],
    category: 'Owner',
    utilisation: '{prefix}yes',
    execute(message) {
        message.channel.send("Yes!")
    }
}