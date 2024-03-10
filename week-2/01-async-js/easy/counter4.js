// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");
const data = " I am changing file content";
fs.writeFile("textfile.txt", data, (err) => {
  if (err) {
    throw new Error("Incorrect file path");
  }
  const readnewfile = fs.readFileSync("textfile.txt", "utf-8");
  console.log(readnewfile);
});
