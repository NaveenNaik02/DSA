const mostCommonWords = (text: string): Array<[string, number]> => {
  const punctuation = ".,!?;:\"'()[]{}-_";

  let cleanedText = text.toLocaleLowerCase();
  for (const p of punctuation) {
    cleanedText = cleanedText.split(p).join(" ");
  }

  const words = cleanedText.split(" ").filter((word) => word.length);
  const frequencyMap = new Map<string, number>();

  for (const word of words) {
    frequencyMap.set(word, (frequencyMap.get(word) || 0) + 1);
  }

  return Array.from(frequencyMap.entries()).sort(
    (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
  );
};

const text = "It was the best! of times, it was the worst of times.";
console.log(mostCommonWords(text));
