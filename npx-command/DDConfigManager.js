const toml = require("toml");
const fs = require("node:fs/promises");
const path = require("node:path");


const DEFAULT_CONFIG_PATH = "./config.toml";
const DEFAULT_OUTPUT_PATH = "./DDissidenceSite";
const DEFAULT_SITE_NAME = "FakeDealsWebsite";


module.exports = class DDConfigManager {

    // #DEFAULT_CONFIG_PATH = "./config.jsonc";

    constructor() {
        // this.configPath = path.resolve(configPath);
        // this.configPath = configPath;

        // this.configPath = undefined;

        this.configText = undefined;
        this.config = undefined;
    }


    async loadConfig(configPath=DEFAULT_CONFIG_PATH) {
        return fs.readFile(configPath, "utf-8")
            .then(fileContent => {
                this.configText = fileContent;
                this.config = toml.parse(fileContent);
            })
            .catch(err => {
                console.error(err);
            })

        // this.configText = await fs.readFile(this.configPath, "utf-8")
        //     .catch(err => {
        //         reject(`Error loading config file "${this.configPath}"!`);
        //     });
        //
        // console.log("AAAAAAAAAAAAAAA")
        // this.config = toml.parse(this.configText);

    }
}