/**
 * This function checks if two strings are anagrams of each other.
 * An anagram is a word or phrase formed by rearranging the letters of another word or phrase.
 * @param {string} first - the first string to compare
 * @param {string} second - the second string to compare
 * @returns {boolean} - true if the strings are anagrams, false otherwise
 */
function isValidAnagram(first: string, second: string): boolean {
  // Check if the strings have the same length. If not, they cannot be anagrams.
  if (first.length !== second.length) {
    return false;
  }

  // Create a lookup object to keep track of the frequency of each character in the first string.
  const lookup: Record<string, number> = {};

  // Iterate over each character in the first string.
  for (let char of first) {
    // If the character is already in the lookup object, increment its frequency.
    // If it's not, add it to the lookup object with an initial frequency of 1.
    lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1);
  }

  // Iterate over each character in the second string.
  for (let char of second) {
    // If the character is not in the lookup object or it's value is 0, it means it's not in the first string.
    // So, the strings cannot be anagrams.
    if (!lookup[char]) {
      return false;
    } else {
      // If the character is in the lookup object, decrement its frequency.
      lookup[char] -= 1;
    }
  }

  // If we have iterated over all characters in the second string without finding any characters not present in the first string,
  // it means the strings are anagrams.
  return true;
}

const first = "listen";
const second = "silent";

console.log(isValidAnagram(first, second));
