const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const letter = "abcdefghijklmnopqrstuvwxyz";

const countLetter = (letter, paragraph) => {
  let count = 0;

  for (let i = 0; i < paragraph.length; i++) {
    if (letter === paragraph[i]) {
      count++;
    }
  }

  return count;
};

for (let i = 0; i < letter.length; i++) {
  console.log(`${letter[i]} = ${countLetter(letter[i], paragraph)}`);
}
