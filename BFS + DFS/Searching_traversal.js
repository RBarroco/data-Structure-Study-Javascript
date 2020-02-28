//Linear Search or Sequential Search -> Finding an element in an array for example; O(n)
//-----methods for it:

//-----indexOf('element')

//-----findIndex(function (item) {
//----------return item === 'element';})

//-----.includes('element')

//Binary Search
//-----If our data is sorted we can do better than O(n) through binary search;

//----Depth and Breadth Search Tree;

/*

If you know a solution is not far from the root of the tree:
-Breadth First Search;

If the tree is very deep and solutions are rare: 
-Breadth First Search (because DFS is going to take super longtime);

If the tree is very wide:
-Depth First Search; (because Breadth First Search is going to need too much memory since it needs to keep track of all nodes in the level it is using Queue);

If solutions are frequent but located deep in the tree:
-Depth First Search;

Determining whether a path exists between two nodes:
-Depth First Search;

Finding the shortest path:
-Breadth First Search
*/

//-----Traversal -> Can be done in Graph or in Tree;
//----------Breadth First Search
//---------------left-to-right on each level of the tree search
//-------------------used for the shortest path;
//-----------------------Closest friends on Linkedin, closest friends on facebook, areas close to our house in google map;

//-----------Depth First Search (WE DON'T CARE ABOUT THE WEIGHT OF THE NEXT NODE)
//---------------Memory consumption is O(h) which means the height of the tree which will be the last call of recursion that is going to be hold in the stack;
//-------------------Check to see if it exists

//-----------Graph has the same approach as Tree; BFS and DFS
//---------------Shortest Path -> Between two nodes of a weighted graph;
//-------------------Dijkstra / A little more efficient than Bellman and with some adjusts it can accommodate negative numbers;
//-------------------Bellman-Ford / Bellman is better for shortest path because it accommodate negative weights / however it is not the most efficient O(n^n)
