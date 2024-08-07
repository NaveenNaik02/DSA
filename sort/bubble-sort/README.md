# Bubble Sort

Bubble Sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent elements, and swapping them if they are in the wrong order. This process continues until the list is sorted.

## How Bubble Sort Works

1. **Initial Pass**:

   - The algorithm starts at the beginning of the list and compares each pair of adjacent elements.
   - If the current element is greater than the next element, they are swapped.

2. **Subsequent Passes**:

   - The algorithm then moves on to the next pair of adjacent elements, repeating the comparison and swapping process if necessary.
   - After each complete pass through the list, the largest unsorted element "bubbles up" to its correct position at the end of the list.

3. **Completion**:
   - The process is repeated, with each subsequent pass sorting the next largest unsorted element, until no more swaps are needed.
   - If no swaps are made in a pass, the algorithm concludes that the list is sorted and terminates early.

## Time Complexity

- **Best Case**: O(n)  
  Occurs when the array is already sorted. In this scenario, the algorithm only makes one pass through the array and detects that no swaps are necessary.

- **Average Case**: O(n^2)  
  Occurs when the array elements are in random order. The algorithm needs to perform multiple passes and comparisons.

- **Worst Case**: O(n^2)  
  Occurs when the array is sorted in reverse order. The algorithm needs to make the maximum number of comparisons and swaps.

## Space Complexity

- **Space Complexity**: O(1)  
  Bubble Sort is an in-place sorting algorithm, meaning it requires a constant amount of extra space.
