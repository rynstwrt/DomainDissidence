module.exports.command = "create [output]";

module.exports.describe = "Create a DomainDissidence website.";

module.exports.builder = {
    output: {
        default: "./DomainDissidenceSite"
    }
}

module.exports.handler = (argv) => {
    // console.log("create cmd ran");
    // console.log(argv.output)
    const path = require("node:path").resolve(argv.output);
    console.log(path)
}