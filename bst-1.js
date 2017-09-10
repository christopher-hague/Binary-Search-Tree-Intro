// Define the Node class. Each node will have 3 main properties: value, left and right.
class Node {
  // by passing a value as an argument to the new Node constructor, we are able to assign the Node's value property equal to that of the value passed.
  // left and right properties will be assigned as new Nodes are added to the tree
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

// Define the BinarySearchTree class.
class BinarySearchTree {
  // BinarySearchTree's are initialized with a root property. Once the root is assigned, Nodes will be added to the tree in a location relative to that of the root
  constructor() {
    this.root = null
  }

  addNode(val) {
    // take the root property from the current BST and store it in a variable
    var root = this.root

    // if the current tree has no root, set the BST's root property equal to a new Node whose value property is equal to the argument passed in the addNode() invocation
    if(!root) {
      this.root = new Node(val)
      return
    }

    // create a variable to store the value of the current root
    // Since we are taking the value passed to addNode(val) and adding it to the tree, use that value to create a new Node within a variable
    var currentNode = root;
    var newNode = new Node(val)

    // for as long as currentNode has a value...
    while(currentNode) {
      // if the val passed to addNode() is less than the value of the currentNode...
      if(val < currentNode.value) {
        // ... if the currentNode has no value at its .left property...
        if(!currentNode.left) {
          // set the currentNode's .left property equal to that of the newNode var, then break out of the loop (as we have successfully added the new node to the tree)
          currentNode.left = newNode;
          break;
        } else {
          // ... if the val passed to addNode() is less than the currentNode's value AND the currentNode has a value assigned to its .left property, set the currentNode variable equal to the value stored at curentNode.left. Then continue the next iteration of the loop with the new currentNode value
          currentNode = currentNode.left
        }
      } // else if the val passed to addNode() is not less than the value of the currentNode...
      else {
        // ... if the currentNode has no value at its .right property...
        if(!currentNode.right) {
          // set the currentNode's .right property equal to that of the newNode var, then break out of the loop (as we have successfully added the new node to the tree)
          currentNode.right = newNode;
          break;
        } else {
          // if the val passed to addNode() is not less than the currentNode's value AND the currenNode has a value assigned to its .right property, set the currentNode variable equal to the value stored at currentNode.right. Then, continue the next iteration of the loop with the new currentNode value
          currentNode = currentNode.right
        }
      }
    }
  }
}
