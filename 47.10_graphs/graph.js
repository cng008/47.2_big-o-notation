class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // accepts a Node instance and adds it to the nodes property on the graph
  // Takes O(1) time
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // accepts an array of Node instances and adds them to the nodes property on the graph
  // Takes O(n) time
  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      this.addVertex(vertex);
    }
  }

  // accepts two vertices and updates their adjacent values to include the other vertex
  // Takes O(1) time
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // accepts two vertices and updates their adjacent values to remove the other vertex
  // Takes O(1) time
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  // Takes O(n) time
  removeVertex(vertex) {
    for (let node of this.nodes) {
      if (node.adjacent.has(vertex)) {
        node.adjacent.delete(vertex);
      }
    }
    this.nodes.delete(vertex);
  }

  // returns an array of Node values using DFS
  depthFirstSearch(start) {
    // Create an empty stack
    const stack = [start];
    const visited = new Set();
    const result = [];
    let currentVertex;

    // visit node
    visited.add(start);

    // While there is still remaining vertices in stack
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex.value);

      // visit neighbors
      for (let neighbor of currentVertex.adjacent) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
          visited.add(neighbor);
        }
      }
    }
    return result;
  }

  // returns an array of Node values using BFS
  breadthFirstSearch(start) {
    // Create an empty queue
    const queue = [start];
    const visited = new Set();
    const result = [];
    let currentVertex;

    // visit node
    visited.add(start);

    // While there is still remaining vertices in queue
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex.value);

      // visit neighbors
      for (let neighbor of currentVertex.adjacent) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
          visited.add(neighbor);
        }
      }
    }
    return result;
  }
}

module.exports = { Graph, Node };
