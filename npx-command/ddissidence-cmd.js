#!/usr/bin/env node

(async () => {
    const configManager = require("./config-manager.js");
    const config = await configManager.loadConfig();

    console.log(config)

    await configManager.createDefaultConfig();
})();