# Merge Sort

Merge Sort is an efficient, stable, and comparison-based sorting algorithm that follows the divide-and-conquer paradigm. It works by recursively dividing the unsorted array into smaller sub-arrays until each sub-array contains a single element. These sub-arrays are then merged back together in the correct order to produce the sorted array.

## How Merge Sort Works

1. **Divide**:

   - Split the unsorted array into two roughly equal halves.

2. **Recursion**:

   - Recursively apply Merge Sort to each half of the array until each sub-array contains only one element (which is inherently sorted).

3. **Merge**:
   - Merge the sorted sub-arrays back together to form a single sorted array. During the merging process, the elements are compared, and the smaller element is placed into the result array, ensuring that the resulting array is in order.

## Example

Consider sorting the array `[38, 27, 43, 3, 9, 82, 10]` using Merge Sort:

1. **Initial Array**: `[38, 27, 43, 3, 9, 82, 10]`

   - Split the array into two halves: `[38, 27, 43]` and `[3, 9, 82, 10]`.

2. **First Split**:

   - The first half `[38, 27, 43]` is further divided into `[38]` and `[27, 43]`.
   - The second half `[3, 9, 82, 10]` is divided into `[3, 9]` and `[82, 10]`.

3. **Further Splitting**:

   - Continue splitting until each sub-array contains a single element:
     - `[27, 43]` splits into `[27]` and `[43]`.
     - `[3, 9]` splits into `[3]` and `[9]`.
     - `[82, 10]` splits into `[82]` and `[10]`.

4. **Merge**:
   - Begin merging the sub-arrays while sorting them:
     - Merge `[27]` and `[43]` to form `[27, 43]`.
     - Merge `[82]` and `[10]` to form `[10, 82]`.
     - Merge `[3]` and `[9]` to form `[3, 9]`.
   - Continue merging:
     - Merge `[38]` with `[27, 43]` to form `[27, 38, 43]`.
     - Merge `[3, 9]` with `[10, 82]` to form `[3, 9, 10, 82]`.
   - Finally, merge the two large sub-arrays to get the fully sorted array:
     - Merge `[27, 38, 43]` and `[3, 9, 10, 82]` to get the sorted array `[3, 9, 10, 27, 38, 43, 82]`.

## Time Complexity

- **Best Case**: O(n log n)
  - Merge Sort consistently divides the array into halves and merges them, leading to O(n log n) complexity in all cases.
- **Average Case**: O(n log n)
  - The average time complexity is also O(n log n), making it highly efficient for large datasets.
- **Worst Case**: O(n log n)
  - Even in the worst case, Merge Sort performs with O(n log n) time complexity.
- **Space Complexity**: O(n)
  - Merge Sort requires additional space proportional to the size of the array, as it needs to store the temporary sub-arrays during the merge process.
