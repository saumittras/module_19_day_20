let satrt_number = 206;
let sum = 0;

while (satrt_number < 311) {
  if (satrt_number % 2 === 0) {
    sum = sum + satrt_number;
    console.log("The sum of even is " + sum);
  }
  satrt_number++;
}

console.log("Total sum of all even number from 206 to 311 is " + sum);
