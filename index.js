import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));

let myUnusedVariable = 0; // This should trigger both 'no-unused-vars' and 'prefer-const' errors
var myUnused = 10;
if (myUnused == 10) { // This should trigger the 'eqeqeq' error
  console.log('This is a test.');
}