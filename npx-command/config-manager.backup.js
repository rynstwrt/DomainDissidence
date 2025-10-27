// // const { safe as jsonc }  = require("jsonc")
// const { safe: jsonc }  = require("jsonc");
// const JSON5 = require("json5");
// const jsoncParser = require("jsonc-parser");
//
//
// const DEFAULT_CONFIG_PATH = "./config.jsonc";
//
//
// module.exports.loadConfig = async (configPath=DEFAULT_CONFIG_PATH) => {
//     // require("json5/lib/register");
//     // const c = require("./config.json5");
//     // console.log(typeof c)
//
//
//     const fs = require("node:fs/promises");
//     const fileContent = await fs.readFile(configPath, "utf-8");
//     console.log(fileContent)
//
//     // const a = jsonc.parse(fileContent);
//     const a = jsoncParser.parse(fileContent);
//     console.log(a)
//
//
//     // const [err, obj] = await jsonc.read(configPath);
//     // if (err) {
//     //     console.error(err);
//     //     return console.error("ERROR READING CONFIG!");
//     // }
//     //
//     // return obj;
//
//
//     // const [err2, stringified] = await jsonc.stringify(obj);
//     // if (err2) {
//     //     console.error(err2);
//     //     return console.error("ERROR STRINGIFYING CONFIG!");
//     // }
//     //
//     // // console.log(stringified)
//     // const [err3, beautified] = await jsonc.beautify(stringified);
//     // console.log(beautified)
//
//     // const a = JSON5.parse(jsonc.stringify(d))
//     // console.log(a)
//
//     // return;
//     // const [err, obj] = await jsonc.read(configPath);
//     // if (err) {
//     //     return console.error("ERR LOADING CONFIG!");
//     // }
//     //
//     // console.log("Successfully loaded config file!");
//     // return obj;
// };
//
//
// function prettifyJSONC(data) {
//     // console.log(jsonc.stringify(data, null, 4))
//     // return;
//     const [err, prettified] = jsonc.beautify(jsonc.stringify(data), null, 4);
//     if (err) {
//         console.error(err)
//         return console.error("ERR PRETTIFYING CONFIG!");
//     }
//
//     console.log(prettified)
//     return prettified;
// }
//
//
// module.exports.writeConfig = async (configPath=DEFAULT_CONFIG_PATH, data) => {
// return
//     // const [err2, stringified] = await jsonc.stringify(data);
//     // if (err2) {
//     //     console.error(err2);
//     //     return console.error("ERROR STRINGIFYING CONFIG!");
//     // }
//     //
//     // const [err3, beautified] = await jsonc.beautify(stringified);
//     // console.log(beautified)
//     //
//     // const [err4, parsed] = jsonc.parse(beautified)
//
//     const [err, success] = await jsonc.write(configPath, data, {space: 4, stripComments: false});
//     // const [err, success] = await jsonc.write(configPath, prettifyJSONC(data));
//     if (err) {
//         return console.error("ERR WRITING CONFIG!");
//     }
//
//     console.log("Successfully wrote config file!");
//     return success;
// }