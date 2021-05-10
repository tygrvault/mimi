module.exports = {
    name: 'seek',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}seek [seconds]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`You're not in a voice channel!`);
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You are not in the same voice channel!`);

        if (!args[0]) return message.channel.send("You need to provice an amount of second to seek!")

        message.react('⏩')
        client.player.seek(message, args[0]);
    }
}