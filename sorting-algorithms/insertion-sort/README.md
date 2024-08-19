# Insertion Sort

Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is less efficient on large lists compared to more advanced algorithms like quicksort or merge sort. However, it is efficient for small data sets or nearly sorted data.

## How Insertion Sort Works

1. **Initial Step**:

   - Start with the second element in the list, considering the first element as a sorted sub list.
   - Compare the current element with the elements in the sorted sub list.

2. **Insertion**:

   - If the current element is smaller than the element it is compared with, shift the larger element to the right.
   - Continue this process until you find the correct position for the current element.
   - Insert the current element at its correct position in the sorted sub list.

3. **Repeat**:
   - Move to the next element and repeat the process until the entire list is sorted.

## Example

Consider sorting the array `[5, 2, 9, 1, 5, 6]` using Insertion Sort:

1. **Initial Array**: `[5, 2, 9, 1, 5, 6]`

   - The first element `5` is considered sorted.
   - Start with the second element `2`.

2. **First Pass**:

   - Compare `2` with `5`. Since `2` is smaller, shift `5` to the right and insert `2` at the beginning.
   - Array becomes: `[2, 5, 9, 1, 5, 6]`.

3. **Second Pass**:

   - Move to the next element `9`. Since `9` is greater than `5`, no shifting is needed.
   - Array remains: `[2, 5, 9, 1, 5, 6]`.

4. **Third Pass**:

   - Move to the next element `1`. Compare `1` with `9`, `5`, and `2`. Shift all three elements to the right and insert `1` at the beginning.
   - Array becomes: `[1, 2, 5, 9, 5, 6]`.

5. **Fourth Pass**:

   - Move to the next element `5`. Compare `5` with `9`. Since `5` is smaller, shift `9` to the right and insert `5` in its correct position.
   - Array becomes: `[1, 2, 5, 5, 9, 6]`.

6. **Fifth Pass**:

   - Move to the next element `6`. Compare `6` with `9`. Since `6` is smaller, shift `9` to the right and insert `6` in its correct position.
   - Array becomes: `[1, 2, 5, 5, 6, 9]`.

7. **Final Sorted Array**:
   - `[1, 2, 5, 5, 6, 9]`

## Time Complexity

- **Best Case**: O(n)  
  Occurs when the array is already sorted. The algorithm only makes one pass through the array.

- **Average Case**: O(n^2)  
  Occurs when the array elements are in random order. The algorithm needs to perform multiple shifts and comparisons.

- **Worst Case**: O(n^2)  
  Occurs when the array is sorted in reverse order. The algorithm needs to make the maximum number of comparisons and shifts.

## Space Complexity

- **Space Complexity**: O(1)  
  The algorithm sorts the array in place, requiring no additional space.
