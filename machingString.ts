/**
 * This function counts the number of times a target string is found in a base string.
 * It does this by iterating over the base string, and for each possible starting index,
 * it creates a temporary string by concatenating characters from the base string.
 * If the temporary string matches the target string, it increments the count.
 *
 * @param {string} base - The string to search within.
 * @param {string} target - The string to search for.
 * @returns {number} - The number of times the target string is found in the base string.
 */
function matchingString(base: string, target: string): number {
  // If the base string is exactly the same as the target string, return 1.
  if (base === target) {
    return 1;
  }

  // Initialize a count variable to keep track of the number of matches.
  let count = 0;

  // Iterate over the base string, starting from the beginning.
  for (let i = 0; i < base.length - target.length; i += 1) {
    // Initialize a temporary string with the first character of the base string.
    let temp: string = base[i];

    // Iterate over the next target.length-1 characters of the base string,
    // concatenating them to the temporary string.
    for (let j = i + 1; j < i + target.length; j += 1) {
      temp += base[j];
    }

    // If the temporary string matches the target string, increment the count.
    count += compareStrings(temp, target) ? 1 : 0;
  }

  // Return the count of matches.
  return count;
}

function compareStrings(temp: string, target: string): boolean {
  for (let i = 0; i < target.length; i += 1) {
    if (temp[i] !== target[i]) {
      return false;
    }
  }
  return true;
}

const base = "how are are ar you";
const target = "are";
console.log(matchingString(base, target));

//other solution
function matchString(base: string, target: string): number {
  let count = 0;
  for (let i = 0; i < base.length - target.length + 1; i += 1) {
    for (let j = 0; j < target.length; j += 1) {
      if (base[i + j] !== target[j]) {
        break;
      }
      if (j === target.length - 1) {
        count += 1;
      }
    }
  }
  return count;
}
