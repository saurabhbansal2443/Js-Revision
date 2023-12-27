import path from "path";
import fs from "fs"

// console.log(fs.existsSync("./../fsModule/fileOne.txt"));

// console.log(fs.existsSync("./package.json"));

// console.log(fs.existsSync("./../basics/node_modules/chalk.jsx"))

 fs.mkdirSync("./newFolder");

fs.writeFileSync('./newFolder/fileone.txt' , "asdfghjkl;")