#!/usr/bin/env node

// const configManager = require("./DDConfigManager.js");
//
(async () => {
    // const DDConfigManager = require("./DDConfigManager.js");
    const configManager = new (require("./DDConfigManager.js"))();

    // console.log(configManager.configPath)
    await configManager.loadConfig()

    // console.log(configManager.configText, "\n\n", configManager.config)
    // console.log(configManager.config.title)

    console.log(configManager.config.colors)
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