const fs = require("fs");
const transformStream = require("stream");

let inputStream = fs.createReadStream(__dirname + "/input.txt");
//console.log(input);

//use piping for transferring data from one place to another in chunks
//can only pipe from reading mechanisms to wriing mechanisms

let outputStream = process.stdout;

let targetStream = fs.createWriteStream(__dirname + "/output.txt");

let midStream = new transformStream.Transform({
  transform(chunk, enc, nextCB) {
    this.push(chunk.toString().toUpperCase());
    setTimeout(nextCB, 5000);
  },
});
inputStream.pipe(midStream).pipe(targetStream);
//for storing data in other files by chunks
