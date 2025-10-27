module.exports.command = "*";

module.exports.describe = "the main command of DomainDissidence";

module.exports.builder = {
    // meme: {
    //     default: "hell yea"
    // }
}


module.exports.handler = argv => {
    // console.log(argv)
    // console.log(argv.meme)
    console.log("Primary cmd ran!");
}