const fs = require("fs");

let inputStream = fs.createReadStream(__dirname + "/input.txt");

//console.log(input);

//use piping for transferring data from one place to another in chunks
//can only pipe from reading mechanisms to wriing mechanisms

let outputStream = process.stdout;
inputStream.pipe(outputStream);
