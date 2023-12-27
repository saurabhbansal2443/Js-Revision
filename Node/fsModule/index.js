import fs from 'fs';


// fs.mkdirSync("./newFolder") // to create folder
//fs.rmdirSync("./newFolder") // to remove folder 

// fs.writeFileSync("file1.txt","I am the text of file one ");// creating a file with some text 

// fs.writeFileSync("file2.pdf","i am the text of file2");

// let data = fs.readFileSync("file1.txt");  // reading the text of a file 

// console.log(data.toString());

// fs.unlinkSync("./file2.pdf") // delete a file 

// fs.appendFileSync("./file1.txt" , "I am the content which is added ");

fs.writeFileSync("./file1.txt","i am updated content ")