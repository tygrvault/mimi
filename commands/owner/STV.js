module.exports = {
    name: 'STV',
    aliases: [],
    category: 'Owner',
    utilisation: '{prefix}STV',
    execute (client, message) {
        function sleep(milliseconds) {
            const date = Date.now();
            let currentDate = null;
            do {
              currentDate = Date.now();
            } while (currentDate - date < milliseconds);
          }

        let announcement = client.channel.get("830515483266514991");
        announcement.message.send("wait... does this work?");
        sleep(10000);
        announcement.message.send("Oh it does, oops hehe")
        sleep(10000);
        message.channel.bulkDelete(2);
    }
}