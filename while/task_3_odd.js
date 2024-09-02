let satrt_number = 81;
let sum = 0;

while (satrt_number < 131) {
  if (satrt_number % 2 === 1) {
    sum = sum + satrt_number;
    console.log("The sum of odd is " + sum);
  }
  satrt_number++;
}

console.log("Total sum of all odd number from 206 to 311 is " + sum);
