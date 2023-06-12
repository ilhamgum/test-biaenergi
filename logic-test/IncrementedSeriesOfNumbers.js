const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("First number? ", (firstNumber) => {
  readline.question(
    `Cool!, first Number is ${firstNumber}, now what's the second? `,
    (secondNumber) => {
      console.log(`The Numbers are [${firstNumber}, ${secondNumber}]`);

      readline.question("How long? ", (increment) => {
        let series = [];

        // const firstNumber = parseInt(firstNumber);
        // const secondNumber = parseInt(secondNumber);

        for (i = 0; i < increment; i++) {
          if (i == 0) {
            series.push(parseInt(firstNumber));
          } else if (i == 1) {
            series.push(parseInt(secondNumber));
          } else {
            let nextNumber;

            if (i == 2 && series[1] == 0 && series[0] == 0) {
              nextNumber = 1 + series[i - 2];
            } else {
              nextNumber = series[i - 1] + series[i - 2];
            }

            series.push(nextNumber);
          }
        }

        console.log(
          `Here's the series of numbers between them: ${
            (firstNumber, secondNumber, series)
          }`
        );

        readline.close();
      });
    }
  );
});
