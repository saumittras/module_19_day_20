// Subtask-2:

// Display sum of all the even numbers from 206 to 311.

/*programming hero*/

let sum = 0;
for (let i = 206; i <= 311; i++) {
  if (i % 2 === 0) {
    sum += i;
    console.log("The sum of even is ", sum);
  }
}
console.log("Total sum of all even number from 206 to 311 is ", sum);
