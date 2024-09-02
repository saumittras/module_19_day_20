/***

Generate a multiplication table for number 9

 */
const num = 9;
let multi = 0;

for (let i = 1; i <= 10; i++) {
  multi = num * i;
  console.log("9 X " + i + "= " + multi);
}
