const exec = require('child_process').exec;
var DanBotHosting = require('danbot-hosting');

module.exports = async (client) => {
    console.log(`Logged into Discord Successfully!`)
    console.log(`Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);
    client.user.setActivity(client.config.discord.activity);

    // Post to Server
    const API = new DanBotHosting.Client("danbot-gx9dk", client);
 
    // Start posting
    let initalPost = await API.autopost();
   
    if (initalPost) {
      console.error(initalPost); // console the error
    }

// Auto GIT pull
    setInterval(() => {
        exec(`git pull`, (error, stdout) => {
            let response = (error || stdout);
            if (!error) {
                if (response.includes("Already up to date.")) {
                    console.log('Bot is up to date. No changes since last pull.')
                } else {
                    client.channels.cache.get('825827995507490886').send('**[Automatic]** \nNew update on GitHub. Pulling... \n\n Logs: \n```' + response + "```" + "\n\n**Restarting bot**");
                    setTimeout(() => {
                        process.exit();
                    }, 30000)
                }
            }
        })
    }, 10000)
};