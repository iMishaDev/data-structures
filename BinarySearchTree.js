
class Node {


/**
 * @constructor 
 * @param {number} value 
 * @param {Node} leftChild 
 * @param {Node} rightChild 
 */

    constructor(value, leftChild=null, rightChild=null){
        this.value = value
        this.leftChild = leftChild
        this.rightChild = rightChild
    }
}

class BinarySearchTree {



/**
 * @constructor 
 * @param {Node} root
 */

    constructor(root=null){
        this.root = root
    }


/**
 * @preorder Preorder Tree Traversal 
 * @param {Node} root with initial value
 * Algorithm Preorder(tree)
 * 1. Visit the root.
 * 2. Traverse the left subtree, i.e., call Preorder(left-subtree)
 * 3. Traverse the right subtree, i.e., call Preorder(right-subtree) 
 */

    preorder(root=this.root){
        console.log(root.value)
        if (root.leftChild) this.preorder(root.leftChild)
        if (root.rightChild) this.preorder(root.rightChild)
    }


/**
 * @inorder Inorder Tree Traversal 
 * @param {Node} root with initial value
 * Algorithm Inorder(tree)
 * 1. Traverse the left subtree, i.e., call Inorder(left-subtree)
 * 2. Visit the root.
 * 3. Traverse the right subtree, i.e., call Inorder(right-subtree)
 */

    inorder(root=this.root){
        if (root.leftChild) this.inorder(root.leftChild)
        console.log(root.value)
        if (root.rightChild) this.inorder(root.rightChild)
    }

/**
 * @search Search 
 * @param {number} target the value of the node we are searching for
 * @param {Node} root with initial value
 * Algorithm Inorder(tree)
 * 1. check if the target value is larger, lower or equal to the root value 
 * 2. if target is lower, go left. if it's larger, go right.
 * 3. recursion until it finds the value or else returns null 
 */

    search(target, root=this.root){
        if (root === null) return null
        if (target === root.value) return root
        if (target > root.value) return this.search(target, root.rightChild)
        if (target < root.value) return this.search(target, root.leftChild)
    }


    validBinarySearchTree(low, high, root=this.root){
        if (!root) return true
        return ((root.value < high && root.value > low)
            && this.validBinarySearchTree(low,root.value, root.leftChild)
            && this.validBinarySearchTree(root.value,high, root.rightChild))
    }
}



/**
 * Tree Example 
 *    10
 *    / \
 *  5   20
 *  /\   /\
 * 4  8 18  24
 */ 

let tree = new BinarySearchTree(new Node(10,
                    new Node(5, new Node(4,null), new Node(8, null)),
                    new Node(20, new Node(18,null),new Node(24, null))));
console.log('Inorder Traversal ')
tree.inorder()
console.log('Preorder Traversal ')
tree.preorder()
console.log('Searching for 20 ', tree.search(20))
console.log('Searching for 1  ', tree.search(1))
console.log(tree)
console.log('is Valid BST: ' ,tree.validBinarySearchTree(-10000, 10000))