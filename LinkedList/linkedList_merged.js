class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function mergedLinkedList(headA, headB) {
  //Define if the lists are null;
  if (!headA) {
    return headB;
  } else if (!headB) {
    return headA;
  }
  //Create a new LinkedList;
  let curNodeA = headA;
  let curNodeB = headB;
  let newNodeHead, curNode, curNodeToAdd;

  //Define the newNodeHead;
  if (curNodeA.data > curNodeB.data) {
    newNodeHead = new Node(curNodeB.data);
    curNodeB = curNodeB.next;
  } else {
    newNodeHead = new Node(curNodeA.data);
    curNodeA = curNodeA.next;
  }

  curNode = newNodeHead;
  //Iterate through each list up to the end of one of those;
  while (curNodeA && curNodeB) {
    if (curNodeA.data > curNodeB.data) {
      curNodeToAdd = new Node(curNodeB.data);
      curNodeB = curNodeB.next;
    } else {
      curNodeToAdd = new Node(curNodeA.data);
      curNodeA = curNodeA.next;
    }
    curNode.next = curNodeToAdd;
    curNode = curNode.next;
  }

  //Check if both lists are at its end;
  while (curNodeA) {
    curNodeToAdd = new Node(curNodeA.data);
    curNodeA = curNodeA.next;
    curNode.next = curNodeToAdd;
    curNode = curNode.next;
  }
  while (curNodeB) {
    curNodeToAdd = new Node(curNodeB.data);
    curNodeB = curNodeB.next;
    curNode.next = curNodeToAdd;
    curNode = curNode.next;
  }
  //Return newNodeHead;
  return newNodeHead;
}
