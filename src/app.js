const clientId = '917719303460106270'
const DiscordRPC = require('discord-rpc');
const RPC = new DiscordRPC.Client({ transport: 'ipc' });

DiscordRPC.register(clientId);

async function setActivity() {
    if (!RPC) return;
    RPC.setActivity({
        details: `Testing Presence`,
        state: `Playing with RPC`,
        startTimestamp: Date.now(),
        largeImageKey: 'ab67616d0000b273b88b37fc9da1a2e7b7358634',
        largeImageText: `Test`,
        smallImageKey: `ab67616d0000b273b88b37fc9da1a2e7b7358634`,
        smallImageText: `Test`,
        instance: false,
        buttons: [
            {
                label: `Planning to sub?`,
                url:`https://www.youtube.com/channel/UC0PBIBY5PjRxWPQdPlD2YmQ`  
            },
            {
                label: `Join Discord?`,
                url: `https://discord.gg/UJahGYJJ`
            }
        ]


    });




};

RPC.on('ready', async () => {
    setActivity();

    setInterval(() => {
        setActivity();}, 15 * 1000);
});

RPC.login({ clientId }).catch(err => console.error(err))