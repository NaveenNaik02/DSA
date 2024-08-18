# Selection Sort

Selection Sort is a simple comparison-based sorting algorithm that divides the input list into two parts: a sorted and an unsorted sub list. The algorithm repeatedly selects the smallest (or largest, depending on sorting order) element from the unsorted sub list, and swaps it with the leftmost unsorted element, moving the boundary between the sorted and unsorted sub lists by one element.

## How Selection Sort Works

1. **Initialization**:

   - Start with the first element in the list. Consider this element as the minimum.

2. **Find the Minimum**:

   - Iterate through the unsorted portion of the list to find the minimum element.

3. **Swap**:

   - Swap the found minimum element with the first element of the unsorted sub list.

4. **Repeat**:
   - Move the boundary between the sorted and unsorted sub lists one position to the right, and repeat the process until the entire list is sorted.

## Example

Consider sorting the array `[64, 25, 12, 22, 11]`:

1. Find the minimum value in the array `[64, 25, 12, 22, 11]`, which is `11`, and swap it with the first element `64`. The array becomes `[11, 25, 12, 22, 64]`.
2. Find the minimum in the remaining unsorted sub list `[25, 12, 22, 64]`, which is `12`, and swap it with `25`. The array becomes `[11, 12, 25, 22, 64]`.
3. Continue this process for the remaining elements until the entire array is sorted.

## Time Complexity

- **Best Case**: O(n²)
  - The best-case scenario occurs when the array is already sorted, but Selection Sort still has to go through all elements and comparisons.
- **Average Case**: O(n²)
  - In the average case, Selection Sort has to perform a quadratic number of comparisons and swaps.
- **Worst Case**: O(n²)
  - The worst-case scenario also results in a quadratic number of operations.
- **Space Complexity**: O(1)
  - Selection Sort is an in-place sorting algorithm, requiring a constant amount of additional memory regardless of input size.
