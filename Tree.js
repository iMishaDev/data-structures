/**
 * A tree is a nonlinear data structure, compared to arrays, linked lists,
 * stacks and queues which are linear data structures.
 * A tree can be empty with no nodes or a tree is a structure consisting of one node
 * called the root and zero or one or more subtrees.
 */

const Queue = require('./Queue')


class Node {


/**
 * @constructor 
 * @param {number} value 
 * @param {Array} children 
 */

    constructor(value, children){
        this.value = value
        this.children = children
    }
}


class Tree {

/**
 * @constructor 
 * @param {Node} root 
 */

    constructor(root={}){
        this.root = root
    }

    height(){
        let count = 0;
        let stack = [];
        stack.push(this.root)
        while(stack.length){
            let node = stack.pop()
            count += 1;
            node.children.map((child) => stack.push(child))
        }
        return Math.floor(Math.log2(count))
    }


/**
 * @dfs Depth-first search
 * @param {Node} root with initial value 
 * Depth-first search is an algorithm for traversing or searching tree or graph data structures.
 * The algorithm starts at the root node and explores as far as possible along each branch before backtracking
 */
    dfs(root=this.root){
        console.log(root.value)
        root.children.map((child)=>{
            this.dfs(child)
        })
    }


/**
 * @bfs Breadth-first search
 * @param {Node} root with initial value
 * Breadth-first search is an algorithm for traversing or searching tree or graph data structures.
 * It starts at the tree root, and explores all of the neighbor nodes at the present depth
 * prior to moving on to the nodes at the next depth level 
 */
    bfs(root=this.root){
        let queue = new Queue();
        queue.enqueue(root)
        
        while(queue.size()){
            let node = queue.dequeue()
            console.log(node.value)
            node.children.map((child) => queue.enqueue(child))
        }
    }

/**
 * the Following functions are traversal, tree traversal is a form of graph traversal and refers to the process
 * of visiting each node in a tree data structure, exactly once. Such traversals are classified by
 * the order in which the nodes are visited
 */


/**
 * @preorder Preorder Tree Traversal 
 * @param {Node} root with initial value
 * Algorithm Preorder(tree)
 * 1. Visit the root.
 * 2. Traverse the left subtree, i.e., call Preorder(left-subtree)
 * 3. Traverse the right subtree, i.e., call Preorder(right-subtree) 
 */
    preorder(root=this.root){
        this.dfs(root)
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
        for(let i=0; i<root.children.length - 1; i++)
            this.inorder(root.children[i])
        console.log(root.value)
        
        if (root.children.length > 0) this.inorder(root.children[root.children.length-1])
    }


/**
 * @postorder Postorder Tree Traversal 
 * @param {Node} root with initial value
 * Algorithm Postorder(tree)
 * 1. Traverse the left subtree, i.e., call Postorder(left-subtree)
 * 2. Traverse the right subtree, i.e., call Postorder(right-subtree)
 * 3. Visit the root.
 */
    postorder(root=this.root){
        root.children.map((child)=>{
            this.inorder(child)
        })
        console.log(root.value)
    }
}

/**
 * Tree Example 
 *     A
 *    / \
 *   B   C
 *  /\   /\
 * D  E F  G
 */ 

let tree = new Tree(new Node('A',
                    [new Node('B', [new Node('D',[]), new Node('E', [])]),
                    new Node('C', [new Node('F',[]),new Node('G', [])])]));
console.log('Tree :',tree)
console.log('Tree Height: ',tree.height())
console.log('Depth First Search')
tree.dfs()
console.log('Breadth First Search')
tree.bfs()
console.log('Preorder traversal through Tree')
tree.preorder()
console.log('Inorder traversal through Tree')
tree.inorder()
console.log('Posorder traversal through Tree')
tree.postorder()
