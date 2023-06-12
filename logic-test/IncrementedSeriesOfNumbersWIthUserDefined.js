const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("First number? ", (number) => {
  readline.question("Incremented by? ", (increment) => {
    let series = [];

    for (i = 0; i < 10 /* numbers max length */; i++) {
      if (i == 0) {
        series.push(parseInt(number));
      } else {
        series.push(parseInt(series[i - 1]) + parseInt(increment));
      }
    }

    console.log(
      `Here's the series of numbers between them: ${(number, series)}`
    );

    readline.close();
  });
});
