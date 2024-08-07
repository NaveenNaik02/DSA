# Insertion Sort

Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is less efficient on large lists compared to more advanced algorithms like quicksort or merge sort. However, it is efficient for small data sets or nearly sorted data.

## How Insertion Sort Works

1. **Initial Step**:

   - Start with the second element in the list, considering the first element as a sorted sublist.
   - Compare the current element with the elements in the sorted sublist.

2. **Insertion**:

   - If the current element is smaller than the element it is compared with, shift the larger element to the right.
   - Continue this process until you find the correct position for the current element.
   - Insert the current element at its correct position in the sorted sublist.

3. **Repeat**:
   - Move to the next element and repeat the process until the entire list is sorted.

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
