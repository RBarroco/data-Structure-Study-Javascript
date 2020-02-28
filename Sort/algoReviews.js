/*
//Comparison Sort: We cannot mathematically beat O(n*Log(n))

Bubble Sort, Insertion Sort, Selection Sort, Merge Sort and Quick Sort;

1) BubbleSort only education,
2) SelectionSort only for education,
3) Insertion sort only in small set of data,
4) MergeSort is good because of divide and conquer O(nLogN) even in the worst case; Space Complexity of O(n);
5) QuickSort in good cases have time Complexity of O(nLogN) bad cases have O(n^2) because of that is important to use good pivot points; however, its space complexity is O(log(n)) much better than the MergeSort which is O(n);
6) HeapSort is quick similar to QuickSort but uses space complexity of O(1). Heapsort is a comparison-based sorting algorithm that uses a binary heap data structure. Like mergesort, heapsort has a running time of O(n\log n),O(nlogn), and like insertion sort, heapsort sorts in-place, so no extra space is needed during the sort. The binary heap data structure allows the heapsort algorithm to take advantage of the heap's heap properties and the heapsort algorithm makes use of the efficient running time for inserting to and deleting from the heap.

OBS: QuickSort Vs. HeapSort
      The most direct competitor of quicksort is heapsort. Heapsort is typically somewhat slower than quicksort, but the worst-case running time is always Θ(nlogn). Quicksort is usually faster, though there remains the chance of worst case performance except in the introsort variant, which switches to heapsort when a bad case is detected. If it is known in advance that heapsort is going to be necessary, using it directly will be faster than waiting for introsort to switch to it.

      https://web.archive.org/web/20130801175915/http://www.cs.auckland.ac.nz/~jmor159/PLDS210/qsort3.html

Non-comparison Sort
   1) only work with numbers, into a small range of them;
      7) Counting Sort -> Can be a sub routine to a more powerful algorithm like Radix Sort; 
      8) Radix Sort;


      */

/*
//#1 - Sort 10 schools around your house by distance:
InsertionSort -> Small amount of numbers. Easy to code, no space complexity because it uses the same memory;

//#2 - eBay sorts listings by the current Bid amount:
Radix/Counting -> because a Bid is a number between a Range than, it is better to use the fastest possible which holds the range on it -> Fixed length of numbers in a range;

//#3 - Sport scores on ESPN
QuickSort -> hardly they will be sorted because is to a different database, low memory.

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
MergeSort; has to be able to sort outside of itself; because there is no space in memory for it; so cannot be HeapSort which uses itself
Out of memory sort; create a new one;

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
Insertion Sort for a preOrded;

//#6 - Temperature Records for the past 50 years in Canada
Radix/Counting Sort because you have an integer number between a small range;
QuickSort, in memory sorting;

//#7 - Large user name database needs to be sorted. Data is very random.
QuickSort

//#8 - You want to teach sorting for the first time
BubbleSort/SelectionSort
*/
