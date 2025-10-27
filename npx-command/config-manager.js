const toml = require("toml");
const fs = require("node:fs/promises");
const path = require("node:path");


const DEFAULT_CONFIG_PATH = "./config.toml";
const DEFAULT_OUTPUT_PATH = "./DDissidenceSite";
const DEFAULT_SITE_NAME = "FakeDealsWebsite";



// module.exports.loadConfig = async (configPath=DEFAULT_CONFIG_PATH) => {
async function loadConfig(configPath=DEFAULT_CONFIG_PATH) {
    // return fs.readFile(configPath, "utf-8").then(fileContent => {
    //     return toml.parse(fileContent);
    // }).catch(err => {
    //     console.error(err);
    // });

    const toml = await fs.readFile(new URL("./config.toml", import.meta.url), "utf-8")
    console.log(toml)
}



async function createDefaultConfig(configPath=DEFAULT_CONFIG_PATH) {
    console.log("Creating default config...");
}



module.exports = { loadConfig, createDefaultConfig };



// module.exports = {
//     loadConfig: loadConfig,
//     createDefaultConfig: createDefaultConfig
// };


// module.exports.createDefaultConfig = async (configPath=DEFAULT_CONFIG_PATH) => {
//
// };