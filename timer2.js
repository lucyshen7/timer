// Interactive Timer

//The process object provides information about, and control over, the current Node.js process. While it is available as a global, it is recommended to explicitly access it via require or import:
const process = require("process");

const handleUserInput = function (key) {
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  } 
  if (key === "1" || key === "2" || key === "3" || key === "4" || key === "5" || key === "6" || key === "7" || key === "8" || key === "9") { // any number from 1 to 9
    let num = Number(key); // convert CLI argument to number  
    setTimeout(() => {
      process.stdout.write('.');
    }, num * 1000);
  }
  if (key === "b") { // user can press b and it should beep right away
    process.stdout.write('.');
  }
};

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding("utf8");
// stdin.resume();
stdin.on("data", handleUserInput);