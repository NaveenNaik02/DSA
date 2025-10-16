const longestSubstring = (s: string): number => {
  let maxLength = 0;
  let start = 0;
  const map = new Map<string, number>();

  for (let end = 0; end < s.length; end += 1) {
    const index = map.get(s[end])

    if(index !== undefined && index >= start){
      start = index + 1;
    }

    map.set(s[end], end);
    maxLength = Math.max(maxLength, end - start + 1)
  }
  return maxLength;
}

// Test cases
console.log(longestSubstring("baaccbcbb"));
console.log(longestSubstring("abcabcbb"));
console.log(longestSubstring("abba"));
