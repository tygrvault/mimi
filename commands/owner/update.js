const exec = require('child_process').exec;

module.exports = {
    name: 'update',
    aliases: ["reload"],
    category: 'Owner',
    utilisation: '{prefix}update',
    execute (client, message) {
            exec(`git pull`, (error, stdout) => {
            let response = (error || stdout);
            if (!error) {
                if (response.includes("Already up to date.")) {
                    console.log('[GitHub] Already up to date.')
                    message.channel.send("Already up to date!")
                } else {
                    console.log('[GitHub] \nNew update on GitHub. Pulling... \n\n Logs: \n' + response + "\n\n**Restarting bot**");
                    client.channels.cache.get('840272304776675328').send('New update on GitHub. Pulling... \n\n Logs: \n```' + response + "```" + "\n\n**Restarting bot**");
                    setTimeout(() => {
                        process.exit();
                    }, 30000)
                }
            }
        })
    }
}