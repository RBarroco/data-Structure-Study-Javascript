function reverse(head) {
  if (head === null) {
    return null;
  }
  let previous = null;
  while (head.next) {
    let next = head.next;
    head.next = previous;
    previous = head;
    head = next;
  }
  head.next = previous;
  return head;
}
