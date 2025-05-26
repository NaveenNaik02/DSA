const isPalindrome = (s: string): boolean => {
  if (s.length === 0) return true;
  if (s.length === 1) return true;

  let i = 0;
  let j = s.length - 1;
  const regex = /^[a-z0-9]$/i;

  while (i < j) {
    const isAlphaNumeric = regex.test(s[i]) && regex.test(s[j]);

    if (isAlphaNumeric) {
      if (s[i].toLocaleLowerCase() === s[j].toLocaleLowerCase()) {
        i += 1;
        j -= 1;
      } else {
        return false;
      }
    } else if (!regex.test(s[i])) {
      i += 1;
    } else if (!regex.test(s[j])) {
      j -= 1;
    }
  }
  return true;
};

console.log(isPalindrome("H123!@321h")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome(" ")); // true (empty or single space is palindrome)
