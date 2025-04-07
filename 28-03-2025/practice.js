// 1️⃣ Import the readline module
const readline = require("readline");

// 2️⃣ Create an input interface
const rl = readline.createInterface({
  input: process.stdin,  // Take input from the keyboard
  output: process.stdout // Print output to the console
});

// 3️⃣ Ask the user for input
rl.question("Enter your name: ", function(name) {
  console.log("Hello, " + name + "!"); // Print the user input

  // 4️⃣ Close the input stream
  rl.close();
});
