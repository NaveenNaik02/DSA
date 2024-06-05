// This function collects all the odd numbers from an array of numbers.
// It uses recursion to iterate over the input array and collects the odd numbers.

// It takes an array of numbers as input and returns an array of all the odd numbers in the input array.
function collectOddValues(numbers: number[]): number[] {
  // This array will store all the odd numbers collected from the input array.
  const oddNumbers: number[] = [];

  // This recursive helper function collects the odd numbers from the input array.
  // It takes an array as input and recursively calls itself with a smaller array.
  function collectOddNumbers(input: number[]): void {
    // Base case: if the input array is empty, return.
    // This stops the recursion and the function stops collecting odd numbers.
    if (input.length === 0) {
      return;
    }

    // Get the first number in the input array.
    const firstNumber = input[0];

    // Check if the first number is odd.
    // If it is odd, add it to the result array.
    if (firstNumber % 2 !== 0) {
      oddNumbers.push(firstNumber);
    }

    // Recursive call: call the helper function with the remaining elements of the input array.
    // This uses the slice method to create a new array that contains all the elements of the input array except the first one.
    // The helper function is then called with this new array as input.
    collectOddNumbers(input.slice(1));
  }

  // Call the helper function with the original input array.
  // This starts the recursion and the function starts collecting odd numbers.
  collectOddNumbers(numbers);

  // Return the result array which contains all the odd numbers collected from the input array.
  return oddNumbers;
}

console.log(collectOddValues([1, 2, 3, 4, 5]));
