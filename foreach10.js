let num = prompt("Enter a positive integer greater than 0:");
let sum = 0;

Array.from({length: num}, (_, i) => i+1).forEach(function(num) {
  sum += num;
});

console.log(`The summation of every number from 1 to ${num} is: ${sum}`);
