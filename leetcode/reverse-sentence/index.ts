const reverseWords = (arr: string[]): string[] => {
  reverseArray(arr, 0, arr.length - 1);

  let start = 0;
  for (let i = 0; i <= arr.length; i += 1) {
    if (arr[i] === " " || i === arr.length) {
      reverseArray(arr, start, i - 1);
      start = i + 1;
    }
  }
  return arr;
};

const reverseArray = (arr: string[], start: number, end: number): void => {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start += 1;
    end -= 1;
  }
};

const arr = [
  "p",
  "e",
  "r",
  "f",
  "e",
  "c",
  "t",
  " ",
  "m",
  "a",
  "k",
  "e",
  "s",
  " ",
  "p",
  "r",
  "a",
  "c",
  "t",
  "i",
  "c",
  "e",
];

console.log(reverseWords(arr));
