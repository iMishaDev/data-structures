class RedBlackNode {
    constructor(color='red', key, leftChild=null, rightChild=null, parent=null){
        this.color = color;
        this.key = key;
        this.leftChild = leftChild;
        this.rightChild = rightChild;
        this.parent = parent;
    }
}


class RedBlackTree {
    constructor(root = null){
        this.root = root;
    }

    insert(node){
        if(!this.root){
            this.root = this.insertHelper(node, this.root);
        }
        else return this.insertHelper(node, this.root);
    }

    insertHelper(node, root){
        if(!root){
            root =  new RedBlackNode('red', node, null, null, null);
        }
        if(node > root.key){
            
            if(root.rightChild)
                this.insert(node, root.rightChild);
            else root.rightChild = new RedBlackNode('red', node, null, null, root);
        }

        if(node < root.key){
            if(root.leftChild)
                this.insert(node, root.leftChild);
            else root.leftChild = new RedBlackNode('red', node, null, null, root);
        }
        return root;
    }
}

let tree = new RedBlackTree();

tree.insert(4);
tree.insert(10);
console.log(tree)