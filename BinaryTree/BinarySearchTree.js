
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
        if(!root)
            return;
        console.log(root.value)
        this.preorder(root.leftChild)
        this.preorder(root.rightChild)
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
        if(!root)
            return;
        this.inorder(root.leftChild)
        console.log(root.value)
        this.inorder(root.rightChild)
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
        if(!root)
            return null;
        if (target === root.value) return root
        if (target > root.value) return this.search(target, root.rightChild)
        if (target < root.value) return this.search(target, root.leftChild)
    }


/**
 * @validBinarySearch check if the given tree is a valid binary tree 
 * @param {number} low the lowest value a node can have
 * @param {number} high the highest value a node can have
 * @param {Node} root the node we're searching through
 * How to validate ?
 * 1. check if the current root value in in the range of the given low, high values
 * 2. check recursively if the left and right children are inside their own scope 
 * 
 */
    validBinarySearchTree(low, high, root=this.root){
        if (!root) 
            return true
        return ((root.value < high && root.value > low)
            && this.validBinarySearchTree(low,root.value, root.leftChild)
            && this.validBinarySearchTree(root.value,high, root.rightChild))
    }


    /**
     * A full Binary tree is a special type of binary tree in 
     * which every parent node/internal node has either two or no children.
     */
    isFullBinaryTree(root){
        if(!root) return true;

        return root 
        && this.isFullBinaryTree(root.leftChild) 
        && this.isFullBinaryTree(root.rightChild)
    }


    isCompleteBinaryTree(){
        
    }


    isBalancedBinaryTree(){
        
    }

    isPerfectBinaryTree(root){
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
// console.log('is Valid BST: ' ,tree.validBinarySearchTree(-10000, 10000))

console.log('isFullBinaryTree', tree.isFullBinaryTree(tree))