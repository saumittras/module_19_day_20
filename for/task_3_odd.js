/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/

let sumOfOdd = 0;
for (let i = 81; i <= 131; i++) {
  if (i % 2 === 1) {
    console.log("The sum of " + sumOfOdd + " and " + i + " is: ");
    sumOfOdd += i;
    console.log(+sumOfOdd);
  }
}
console.log("The total sum of 81 to 131 is = " + sumOfOdd);
