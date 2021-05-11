module.exports = {
    name: 'lyrics',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}lyrics',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`You're not in a voice channel!`);
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You are not in the same voice channel!`);

        const track = client.player.nowPlaying(message);

        async function ass() {
            message.react('⏳')
            const lyrics = await client.player.lyrics(track.title);
            message.channel.send(lyrics.lyrics);
        }

        ass();
    }
}