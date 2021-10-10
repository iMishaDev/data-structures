
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
    isFullBinaryTree(root=this.root){
        if(!root.rightChild && !root.leftChild)
            return true;
        if(!root.rightChild || !root.leftChild)
            return false
        return   this.isFullBinaryTree(root.leftChild) 
        && this.isFullBinaryTree(root.rightChild)
    }


    isCompleteBinaryTree(root=this.root){
        if(!root) return [true, 1];
        const [leftBool, leftHeight] = this.isCompleteBinaryTree(root.leftChild);
        const [rightBool, rightHeight] = this.isCompleteBinaryTree(root.rightChild);
        return [leftBool && rightBool && leftHeight >= rightHeight, Math.max(leftHeight, rightHeight) + 1];
    }


    isBalancedBinaryTree(root=this.root){
        return this.isBalancedBinaryTreeHelper(root) > -1
    }


    isBalancedBinaryTreeHelper(root){
        if(!root) return 1; 

        const leftHeight  = this.isBalancedBinaryTreeHelper(root.leftChild);
        const rightHeight  = this.isBalancedBinaryTreeHelper(root.rightChild);
        if(leftHeight >= 0 && rightHeight >= 0 && Math.abs(leftHeight - rightHeight) <= 1)
            return Math.max(leftHeight, rightHeight) + 1
        return -1
    }


    isPerfectBinaryTree(root=this.root){
        return this.#isPerfectBinaryTreeHelper(root, this.#calculateDepth(root), 0);
    }

    #calculateDepth(root=this.root){
        if(!root) return 0;
        return 1 + this.#calculateDepth(root.leftChild);
    }


    #isPerfectBinaryTreeHelper(root, depth, height){
        if(!root) return height;
        
        if(!root.leftChild && !root.rightChild)
            return depth === height;
        
        if(!root.leftChild || !root.rightChild)
            return false;

        return this.#isPerfectBinaryTreeHelper(root.leftChild) && this.#isPerfectBinaryTreeHelper(root.rightChild)
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
                    new Node(5, new Node(4), new Node(8)),
                    new Node(20, new Node(18),new Node(24))));


let tree2 = new BinarySearchTree(new Node(10,
                    new Node(5),
                    new Node(20, 
                        new Node(18,
                            new Node(17),
                            new Node(19)),
                    new Node(24 ))));


let tree3 = new BinarySearchTree(new Node(10,
                    new Node(5, 
                        new Node(18),
                        new Node(24))));

let tree4 = new BinarySearchTree(new Node(10,
                    new Node(5),
                    new Node(20, 
                        new Node(18),
                        new Node(24))));
// console.log('Inorder Traversal ')
// tree.inorder()
// console.log('Preorder Traversal ')
// tree.preorder()
// console.log('Searching for 20 ', tree.search(20))
// console.log('Searching for 1  ', tree.search(1))
// console.log(tree)
// console.log('is Valid BST: ' ,tree.validBinarySearchTree(-10000, 10000))

console.log('isFullBinaryTree', tree.isFullBinaryTree())
console.log('isFullBinaryTree', tree3.isFullBinaryTree())

console.log('isPerfectBinaryTree', tree.isPerfectBinaryTree())
console.log('isPerfectBinaryTree', tree3.isPerfectBinaryTree())

console.log('isCompleteBinaryTree', tree.isCompleteBinaryTree())
console.log('isCompleteBinaryTree', tree4.isCompleteBinaryTree())

console.log('isBalancedBinaryTree tree', tree.isBalancedBinaryTree())
console.log('isBalancedBinaryTree tree2 ', tree2.isBalancedBinaryTree())
console.log('isBalancedBinaryTree tree3 ', tree3.isBalancedBinaryTree())
console.log('isBalancedBinaryTree tree4 ', tree4.isBalancedBinaryTree())