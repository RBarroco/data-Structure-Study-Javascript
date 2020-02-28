const strings = { a: 'a', b: 'b', c: 'c' };

console.log(strings.c);

/*Methods:
split() -> transform everything into string;
push() -> O(1) can be O(n) if you are appending to the end of the array based on the beginning of the address of the array going up to the end, then, understanding that you went from the beginning to the end O(n);
unshift() //insert item at the beginning of the array; which means moving everything on address ahead -> O(n)
pop() -> O(1)
splice(2,0,'alien')  -> 2 is the first address, 0 is how many elements to remove from the 2 ahead, and 'alien' is what to be inserted from the 2 position itself ahead; -> O(n)
*/
