// Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less effcient on large lists than more advanced algoritms such as quicksort, heapsort, or merge sort. However, it has several advantages such as simple implementation, efficient for small data sets, and more efficient in practice than most other simple quadratic algorithms such as selection sort or bubble sort.

// we take an element and keep checking it with the elements before it, if the element is smaller than the previous element, we keep shifting the previous element to the right until we find the correct position for the current element. This process is repeated for all elements in the array until the entire array is sorted. The time complexity of insertion sort is O(n^2) in the worst case and O(n) in the best case when the array is already sorted.
let insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let prev = i - 1;

    while (prev >= 0 && arr[prev] > curr) {
      arr[prev + 1] = arr[prev];
      prev--;
    }

    arr[prev + 1] = curr;
  }
};

let arr = [7, 4, 3, 5, 1, 2, 6];

insertionSort(arr);

console.log(arr);
