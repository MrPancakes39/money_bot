console.log("Running >.<");
const robot = require("robotjs");
const clipboardy = require("clipboardy");
const VERSION = "1.0.0"

console.log(`Running version ${VERSION}`);
setTimeout(main, 3000);

function copy_paste(str) {
    clipboardy.writeSync(str);
    robot.keyToggle("v", "down", "control");
    robot.keyToggle("v", "up", "control");
}

function send(str) {
    copy_paste(str);
    robot.keyTap("enter");
}

function main() {
    send(`**Running Sal's Bot version ${VERSION}**`);
    runBot();
}

const cmd = ["pls hunt", "pls fish", "pls beg"];

function runBot() {
    send(cmd[0]);
    setTimeout(runBot, 61 * 1000); // After a minute.
    send(cmd[1]);
    send(cmd[2]);
}