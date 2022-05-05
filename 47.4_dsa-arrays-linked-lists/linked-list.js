/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** _get(idx): retrieve node at idx.
   * Takes O(n) time
   */

  _get(idx) {
    let current = this.head;
    let count = 0;

    while (current !== null && count != idx) {
      count++;
      current = current.next;
    }
    return current;
  }

  /** push(val): add new value to end of list.
   * Takes O(1) time
   */

  push(val) {
    let newNode = new Node(val); // create new node to hold onto the data
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode; // point tail to new node
      this.tail = newNode; // set new tail
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list.
   * Takes O(1) time
   */

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    if (this.length === 0) this.tail = this.head;
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) {
      throw new Error('List is empty');
    }

    return this.removeAt(this.length - 1);
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) {
      throw new Error('List is empty');
    }

    return this.removeAt(0);
  }

  /** getAt(idx): get val at idx.
   * Takes O(n) time
   */

  getAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error('Invalid index.');
    }

    return this._get(idx).val;
  }

  /** setAt(idx, val): set val at idx to val
   * Takes O(n) time
   */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error('Invalid index.');
    }

    let current = this._get(idx);
    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0) {
      throw new Error('Invalid index.');
    }

    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    if (!this.head) {
      let newNode = new Node(val);
    }

    // get the one before it
    let prev = this._get(idx - 1);

    let newNode = new Node(val);
    newNode.next = prev.next; // change pointer from prev to newNode
    prev.next = newNode; //point prev node to newNode

    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error('Invalid index.');
    }

    // special case: remove first item
    if (idx === 0) {
      let val = this.head.val;
      this.head = this.head.next;
      this.length--;
      if (this.length < 2) this.tail = this.head;
      return val;
    }

    let prev = this._get(idx - 1);

    // special case: remove last item
    if (idx === this.length - 1) {
      let val = prev.next.val;
      prev.next = null;
      this.tail = prev;
      this.length--;
      return val;
    }

    // normal case: remove in middle
    let val = prev.next.val;
    prev.next = prev.next.next;
    this.length--;
    return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (!this.head) return 0;

    let total = 0;
    let current = this.head;

    while (current !== null) {
      total += current.val;
      current = current.next;
    }
    return total / this.length;
  }
}

module.exports = LinkedList;
