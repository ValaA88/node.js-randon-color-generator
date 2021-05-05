const randomColor = require('randomcolor'); // import the script
const chalk = require('chalk');
const color = randomColor(); // a hex code for an attractive color

// console.log(chalk);

const output = `###############################
###############################
###############################
##########           ##########
##########  ${color} ##########
##########           ##########
###############################
###############################
###############################`;

const inputColor = process.argv[2];
if (process.argv[2]) {
  console.log(chalk[inputColor](output));
} else {
  console.log(chalk.hex(color)(output));
}
// console.log(chalk.hex(color)(output));
// console.log(process.argv[2]);
// console.log(chalk[inputColor](output));
