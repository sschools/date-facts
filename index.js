const moment = require("moment");
const chalk = require("chalk");

let now = moment();

let sec = (now.format("H")*3600) + (now.format("m")*60) + (now.format("s")*1);

if (now.isDST()) {
  var dst = "is";
} else {
  var dst = "is not";
}

if (now.isLeapYear()) {
  var leap = "is";
} else {
  var leap = "is not";
}

console.log("It is " + chalk.blueBright(`${now.format("dddd, MMMM Do YYYY, h:mm:ss a")}`) + ".");
console.log("It is the " + chalk.magenta(`${now.format("DDDo")} `) + "day of the year.");
console.log("It is " + chalk.cyan(sec) + " seconds into the day.");
console.log("It " + chalk.greenBright(dst) + " during Daylight Savings Time.");
console.log("It " + chalk.red(leap) + " a leap year.");
