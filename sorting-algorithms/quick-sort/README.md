# Quick Sort

Quick Sort is a highly efficient and widely used sorting algorithm that follows the divide-and-conquer approach. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.

## How Quick Sort Works

1. **Choose a Pivot**:

   - Select an element from the array as the pivot. Various strategies exist for choosing the pivot, such as picking the first element, the last element, the middle element, or a random element.

2. **Partitioning**:

   - Rearrange the elements in the array so that all elements less than the pivot come before it, and all elements greater than the pivot come after it. The pivot is now in its correct position.

3. **Recursion**:

   - Recursively apply the above steps to the sub-arrays of elements with smaller values and those with greater values.

4. **Combine**:
   - The process repeats until the base case is reached, where the array is of length 0 or 1, which are inherently sorted.

## Example

Consider sorting the array `[10, 7, 8, 9, 1, 5]` using Quick Sort:

1. **Initial Array**: `[10, 7, 8, 9, 1, 5]`
   - Let's choose the last element `5` as the pivot.
2. **Partitioning**:
   - Rearrange the array so that elements less than `5` are on the left and elements greater than `5` are on the right. The array might look like `[1, 5, 8, 9, 7, 10]` after partitioning.
   - Here, `5` is in its correct position.
3. **Recursion**:
   - Apply Quick Sort to the left sub-array `[1]` and the right sub-array `[8, 9, 7, 10]`.
   - Recursively repeat the process for these sub-arrays until they are sorted.
4. **Sorted Array**:
   - After applying Quick Sort to all sub-arrays, the sorted array is `[1, 5, 7, 8, 9, 10]`.

## Time Complexity

- **Best Case**: O(n log n)
  - This occurs when the pivot divides the array into two nearly equal halves, leading to logarithmic partitioning levels.
- **Average Case**: O(n log n)
  - On average, Quick Sort performs well with a time complexity of O(n log n) for most cases.
- **Worst Case**: O(n²)
  - The worst case occurs when the pivot element is always the smallest or largest element, leading to unbalanced partitions. This results in quadratic time complexity.
- **Space Complexity**: O(log n)
  - Quick Sort is generally in-place, meaning it requires a small amount of additional memory space, proportional to the depth of the recursion.
