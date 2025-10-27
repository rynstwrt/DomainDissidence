#!/usr/bin/env node

// const configManager = require("./DDConfigManager.js");
//
(async () => {
    const DDConfigManager = require("./DDConfigManager.js");
    const configManager = new DDConfigManager();

    console.log(configManager.configPath)
    await configManager.loadConfig()

    console.log(configManager.configText, configManager.config)
})();


// #!/usr/bin/env node
//
// // const configManager = require("./DDConfigManager.js");
// //
// (async () => {
//     const configPath = "./config.jsonc";
//
//     const config = await configManager.loadConfig(configPath);
//     console.log(config)
//
//     const s = await configManager.writeConfig("./config2.jsonc", config);
//     console.log(s);
// })();