class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration.
   * Takes O(log n) time
   */

  insert(val) {
    // If the tree is empty, insert at the root
    if (!this.root) {
      this.root = new Node(val);
      return this; // returns the tree
    }

    // Otherwise, find the correct spot for the new node.
    let current = this.root;
    // while loop to transverse tree
    while (true) {
      // check to see if value is greater
      if (val < current.val) {
        // check to see if left child exists; is not null
        if (!current.left) {
          current.left = new Node(val);
          return this;
        } else {
          current = current.left;
        }
      } else {
        if (!current.right) {
          current.right = new Node(val);
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion.
   * Takes O(log n) time
   */

  insertRecursively(val, current = this.root) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    if (val < current.val) {
      if (!current.left) {
        current.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.left);
    } else {
      if (!current.right) {
        current.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration.
   * Takes O(log n) time
   */

  find(val) {
    let current = this.root;
    let found = false;

    if (current.val === val) return current;

    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) return undefined;
    return current;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion.
   * Takes O(log n) time
   */

  findRecursively(val, current = this.root) {
    if (!this.root) return undefined;

    if (val < current.val) {
      if (!current.left) return undefined;
      return this.findRecursively(val, current.left);
    } else if (val > current.val) {
      if (!current.right) return undefined;
      return this.findRecursively(val, current.right);
    }
    return current;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let visited = [];
    let current = this.root;

    function traverse(node) {
      visited.push(node.val); // visit
      if (node.left) traverse(node.left); // go left if there's a left
      if (node.right) traverse(node.right); // go right if there's a right
    }

    traverse(current);
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let visited = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left); // go left if there's a left
      visited.push(node.val); // visit
      if (node.right) traverse(node.right); // go right if there's a right
    }

    traverse(current);
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let visited = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left); // go left if there's a left
      if (node.right) traverse(node.right); // go right if there's a right
      visited.push(node.val); // visit
    }

    traverse(current);
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root;
    let queue = [];
    let visited = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      visited.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
