const countConstruct = (
  target: string,
  wordBank: string[],
  memo: Record<string, number> = {}
): number => {
  if (target in memo) return memo[target];
  if (target === "") return 1;

  let totalCount = 0;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const newCount = countConstruct(suffix, wordBank, memo);
      totalCount += newCount;
    }
  }

  memo[target];
  return totalCount;
};

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
