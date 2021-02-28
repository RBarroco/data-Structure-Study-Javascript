function mergeLinkedLists(headA, headB) {
  //Null checks, return non-null list (or null list if both are null)
  if (!headA) {
    return headB;
  } else if (!headB) {
    return headA;
  }

  var curNodeA = headA;
  var curNodeB = headB;

  var newNodeHead, curNode, curNodeToAdd;

  //Get first node (head)
  if (curNodeA.data > curNodeB.data) {
    newNodeHead = new Node(curNodeB.data);
    curNodeB = curNodeB.next;
  } else {
    newNodeHead = new Node(curNodeA.data);
    curNodeA = curNodeA.next;
  }

  curNode = newNodeHead;

  //Go through both lists until one is exhausted
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

  //Go through the rest of list A if non-null
  while (curNodeA) {
    curNodeToAdd = new Node(curNodeA.data);
    curNodeA = curNodeA.next;
    curNode.next = curNodeToAdd;
    curNode = curNode.next;
  }

  //Go through the rest of list B if non-null
  while (curNodeB) {
    curNodeToAdd = new Node(curNodeB.data);
    curNodeB = curNodeB.next;
    curNode.next = curNodeToAdd;
    curNode = curNode.next;
  }

  return newNodeHead;
}
