const fs = require("fs");

if (!fs.existsSync("tasks.json")) {
    fs.writeFileSync("tasks.json", "[]");
}

const data = fs.readFileSync("tasks.json", "utf8");
const tasks = JSON.parse(data);

console.log("Task File is ready");
console.log(tasks)