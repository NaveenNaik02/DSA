function longestSubstringWithoutRepeat(s: string): number {
  let maxLength = 0;
  let start = 0;
  const map = new Map<string, number>();

  for (let end = 0; end < s.length; end += 1) {
    if (map.has(s[end]) && map.get(s[end])! >= start) {
      start = map.get(s[end])! + 1;
    }

    map.set(s[end], end);

    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}

// Test cases
console.log(longestSubstringWithoutRepeat("abcabcbb"));
console.log(longestSubstringWithoutRepeat("abba"));
