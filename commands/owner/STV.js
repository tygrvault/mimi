module.exports = {
    name: 'STV',
    aliases: [],
    category: 'Owner',
    utilisation: '{prefix}STV',
    execute (client, message) {
      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

        let announcement = "830515483266514991";
        client.channels.cache.get(announcement).send("Loading...");
        sleep(5000);
        client.channels.cache.get(announcement).send("Finding event `STV.js`...")
        sleep(5000);
        client.channels.cache.get(announcement).send("Started server on https://mimi.nordstudios.org/shh...")
        sleep(5000);
        client.channels.cache.get(announcement).send("*Everything is going to plan... Good.*")
    }
}