import chalk from 'chalk';

console.log(
  chalk.blue(
    'Hello world!',
  ),
);

const myUnusedVariable = 0; // This should trigger both 'no-unused-vars' and 'prefer-const' errors

if (
  myUnusedVariable ===
  0
) {
  // This should trigger the 'eqeqeq' error
  console.log(
    'This is a test.',
  );
}
