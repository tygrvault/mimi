module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    async execute(client, message, args) {
        const { Util } = require('discord-player');

        if (!message.member.voice.channel) return message.channel.send(`You're not in a voice channel!`);
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You are not in the same voice channel!`);

        if (!args[0]) return message.channel.send(`Please indicate the title of a song!`);

        message.react('✅')

        if (Util.isURL(args.join(" "))) return client.player.play(message, args.join(" "), { firstResult: true });
        const tracks = await Util.ytSearch(args.join(" "), {
            user: message.author,
            player: client.player
        }).catch(() => {});

        if (!tracks || !tracks.length) return message.channel.send('Track not found!');

        client.player.play(message, tracks[0].url, { firstResult: true });
    },
};