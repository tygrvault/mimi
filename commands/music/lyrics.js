module.exports = {
    name: 'lyrics',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}lyrics',

    execute(client, message) {
        /* if (!message.member.voice.channel) return message.channel.send(`You're not in a voice channel!`);
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You are not in the same voice channel!`);
        */
        async function lyrics() {
            const lyrics = await client.player.lyrics(args[0])
            message.channel.send(lyrics.lyrics);
        };
        lyrics();
    }
}