const exec = require('child_process').exec;

module.exports = {
    name: 'update',
    aliases: ["reload"],
    category: 'Owner',
    utilisation: '{prefix}update',
    execute (message) {
            exec(`git pull`, (error, stdout) => {
            let response = (error || stdout);
            if (!error) {
                if (response.includes("Already up to date.")) {
                    message.channel.send('[GitHub] Already up to date.')
                } else {
                    message.channel.send('**[GitHub]** \nNew update on GitHub. Pulling... \n\n Logs: \n```' + response + "```" + "\n\n**Restarting bot**");
                    client.channels.cache.get('825827995507490886').send('**[Automatic]** \nNew update on GitHub. Pulling... \n\n Logs: \n```' + response + "```" + "\n\n**Restarting bot**");
                    setTimeout(() => {
                        process.exit();
                    }, 30000)
                }
            }
        })
    }
}
