console.log("Running >.<");
const robot = require("robotjs");
const clipboardy = require("clipboardy");
const VERSION = "1.1.0"

console.log(`Running version ${VERSION}`);
setTimeout(main, 3000);

function delay(t, v) {
    return new Promise(function (resolve) {
        setTimeout(resolve.bind(null, v), t)
    });
}

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

const cmd = ["pls hunt", "pls fish", "pls beg", "pls search"];

async function runBot() {
    send(cmd[0]);
    setTimeout(runBot, 61 * 1000); // After a minute.
    send(cmd[1]);
    send(cmd[2]);
    await delay(10000)
    send(cmd[3]);
    await delay(5000)
    await checkColor();
    let option = await selectOption();
    send(option);
    }

    async function selectOption() {
        try {
            let text = await getText();
            let options = text.match(/`\S*`/g).map(elt => elt.replace(/`/g, ""));
            return options[Math.floor(Math.random() * options.length)];
        } catch (err) {}
    }

    async function getText() {
        robot.moveMouse(1080, 568);
        await delay(500);
        robot.mouseClick();
        await delay(500);
        robot.moveMouse(1032, 576);
        await delay(500);
        robot.mouseClick();
        await delay(500);
        robot.keyToggle("a", "down", "control");
        robot.keyToggle("a", "up", "control");
        robot.keyToggle("c", "down", "control");
        robot.keyToggle("c", "up", "control");
        robot.keyTap("backspace");
        robot.keyTap("backspace");
        return clipboardy.readSync();
    }

    function checkColor() {
        // Checks the  color.
        let task = setInterval(() => {
            let hex = robot.getPixelColor(388, 616);
            if (hex == "2f3136") {
                clearTimeout(task);
                return;
            }
        }, 1000);

        // Stops the loop after 10 seconds.
        setTimeout(() => {
            clearTimeout(task);
            return;
        }, 10 * 1000);
}