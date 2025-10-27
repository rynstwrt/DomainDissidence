// #!/usr/bin/env node
// // const yargs = require("yargs");
// const { hideBin } = require("yargs/helpers");
// const path = require("node:path");
// const jsonfile = require("jsonfile");
//
//
// const yargs = require("yargs/yargs");
//
// const commandOptions = {
//     "output": {
//         alias: "o",
//         describe: "The site output location",
//         type: "string",
//         demandOption: true
//     }
// };
//
// const argv = yargs(hideBin(process.argv))
//     .usage(`$0`, "main", yargs => {
//         // return yargs.positional("output", {
//         //     describe: "The output location of the created site",
//         //     type: "string"
//         // })
//         console.log(yargs)
//     })
//     .usage(`$0 create-site <output>`, "Create the DD site", yargs => {
//         return yargs.positional("output", {
//             describe: "The output location of the created site",
//             // type: "string"
//         })
//     })
//     // .option("output", commandOptions["output"])
//     // .option("output", {
//     //     alias: "o",
//     //     describe: "the folder to create the website in",
//     //     type: "path",
//     //     // demandOption: true
//     // })
//     // .usage("")
//     // .check(argv => {
//     //     if (argv.output && argv.output === "test") {
//     //         throw new Error("output jank")
//     //     }
//     //
//     //     console.log('ret true')
//     //     return true;
//     // }).argv;
//     .strict(true)
//     .parse();
//
// console.log(argv)
// console.log("\n", argv.output);
//
// // const argv = require("yargs-parser")("--meme1=test");
// // console.log(argv)
//
// //
// // const argv = yargs(hideBin(process.argv))
// //     .usage(`Usage: $0 <command> [options]`)
// //     .command("create", "Create a DomainDissidence website")
// //     .example(`$0 create --output ./examplepath`)
// //     .alias("o", "output")
// //     .nargs("o", 1)
// //     .describe("o", "the output path of the site")
// //     .demandOption(["o"])
// //     .help("h").alias("h", "help")
// //
// //     // .alias("")
// //     // .demandOptions(["w"])
// //     // .default("w", 10)
// //     .parse();
// //
// // console.log("width is ", argv.w);
//
//
//
// // const argv = yargs(hideBin(process.argv))
// //     .command("$0", "default cmd", () => {}, argv => {
// //         console.log("default cmd ran");
// //     })
// //     .
// //     .parse();
//
//
// // yargs().command(require("./args-module.js"))
// //        .help()
// //        .parse(hideBin(process.argv));
//
//
// // const argv = yargs(hideBin(process.argv)).parse();
// //
// //
// // const siteName = argv.siteName;
// // console.log(siteName);
// //
// //
// // const outputDir = path.resolve(argv.outputDir || "./DomainDissidenceSite");
// // console.log(outputDir)
// //
// // function sendHelpMessage() {
// //     console.log("Help message:");
// // }
// //
// // // const isHelp = argv.getKey("help");
// // if (argv.help) {
// //     return sendHelpMessage();
// //     // return;
// // }
// //
// // console.log(argv)