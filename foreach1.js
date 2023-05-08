// Get the sum of two arrays…actually the sum of all their elements.P.S. Each array
// includes only integer numbers. Output is a number too.

function sumArrays(arr1, arr2) {
  let sum = 0;

  // Summing elements of the first array
  arr1.forEach(function(number) {
    sum += number;
  });

  // Summing elements of the second array
  arr2.forEach(function(number) {
    sum += number;
  });

  return sum;
}

// Example usage
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const totalSum = sumArrays(array1, array2);
console.log(totalSum); // Output: 21 (1 + 2 + 3 + 4 + 5 + 6 = 21)
