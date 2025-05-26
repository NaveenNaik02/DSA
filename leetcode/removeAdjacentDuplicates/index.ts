const removeDuplicates = (s: string, k: number): string => {
  const stack: Array<[string, number]> = [];

  for (const char of s) {
    if (stack.length && stack[stack.length - 1][0] === char) {
      stack[stack.length - 1][1] += 1;
    } else {
      stack.push([char, 1]);
    }

    if (stack[stack.length - 1][1] === k) {
      stack.pop();
    }
  }

  const newString = stack.map(([char, count]) => char.repeat(count)).join("");
  return newString;
};

console.log(removeDuplicates("abcd", 2));
console.log(removeDuplicates("deeedbbcccbdaa", 3));
console.log(removeDuplicates("pbbcggttciiippooaais", 2));
