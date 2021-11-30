const readline = require('readline');

let output = []

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? ', (answer) => {
  output.push(answer)
  rl.question('What do you listen to while doing that? ', (answer) => {
    output.push(answer)
    rl.question('Which meal is your favorie? (dinner, brunch, etc) ', (answer) => {
      output.push(answer)
      rl.question('What is your favorite sport ', (answer) => {
        output.push(answer)
        console.log(`${output[0]} loves listening to ${output[1]} while coding, devouring Yak Momos for ${output[2]}, and prefers ${output[3]} over any other sport.`);
        rl.close();
      });
    });
  });
});