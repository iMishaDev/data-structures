class RedBlackNode {
    constructor(color=1, key, leftChild=null, rightChild=null, parent=null){
        this.color = color;
        this.key = key;
        this.leftChild = leftChild;
        this.rightChild = rightChild;
        this.parent = parent;
    }
}


class RedBlackTree {
    constructor(){
        this.root = null
    }

    insert(node){
        if(!this.root){
            this.root = new RedBlackNode(0, node, null, null, null);
            return;
        }
        return this.insertHelper(node, this.root);
    }

    insertHelper(node, root){
        if(node > root.key){  
            if(root.rightChild)
                this.insertHelper(node, root.rightChild);
            else {
                root.rightChild = new RedBlackNode(1, node, null, null, root);
                if (root.rightChild === null){
                    root.rightChild.color = 0
                    return
                }

                if (root.rightChild.parent === null || root.rightChild.parent.parent === null)
                    return
                this.fixInsert(root.rightChild);
            }
        }

        if(node < root.key){
            if(root.leftChild)
                this.insertHelper(node, root.leftChild);
            else {
                root.leftChild = new RedBlackNode(1, node, null, null, root);
                if (root.leftChild.parent === null){
                    root.leftChild.color = 0
                    return
                }

                if (root.leftChild.parent === null || root.leftChild.parent.parent === null)
                    return
                this.fixInsert(root.leftChild);
            }
        }
        return root;
    }

    fixInsert(element){
        while (element.parent && element.parent.color == 1){
            if ( element.parent.parent && element.parent == element.parent.parent.rightChild){
                let u = element.parent.parent.leftChild
                if (u.color == 1){
                    u.color = 0
                    element.parent.color = 0
                    element.parent.parent.color = 1
                    element = element.parent.parent
                }
                else{
                    if (element == element.parent.leftChild){
                        element = element.parent
                        this.rightRotate(element)
                    }
                    element.parent.color = 0
                    element.parent.parent.color = 1
                    this.leftRotate(element.parent.parent)
                }
            }
            else{
                let u = element.parent.parent.rightChild

                if (u.color == 1) {
                    u.color = 0
                    element.parent.color = 0
                    element.parent.parent.color = 1
                    element = element.parent.parent
                }
                else {
                    if (element == element.parent.rightChild){
                        element = element.parent
                        this.leftRotate(element)
                    }
                    element.parent.color = 0
                    element.parent.parent.color = 1
                    this.rightRotate(element.parent.parent)
                }
            if (element == this.root)
                break
            }
        }
        this.root.color = 0
    }




    leftRotate( x){
        let y = x.rightChild
        x.rightChild = y.leftChild
        if (y.leftChild && (y.leftChild.leftChild !== null || y.leftChild.rightChild !== null))
            y.leftChild.parent = x

        y.parent = x.parent
        if (x.parent == null)
            this.root = y
        else if (x == x.parent.leftChild)
            x.parent.leftChild = y
        else {
            x.parent.rightChild = y
        }
        y.leftChild = x
        x.parent = y
    }


    rightRotate(x){
        let y = x.leftChild
        x.leftChild = y.rightChild
        
        if (y.rightChild && (y.rightChild.leftChild != null && y.rightChild.rightChild !== null))
            y.rightChild.parent = x

        y.parent = x.parent
        if (x.parent == null)
            this.root = y
        else if( x == x.parent.rightChild)
            x.parent.rightChild = y
        else {
            x.parent.leftChild = y
        }
        y.rightChild = x
        x.parent = y
    }

    inorder(root=this.root){
        if(!root)
            return;
        this.inorder(root.leftChild)
        console.log(root.key, root.color)
        this.inorder(root.rightChild)
    } 
}

let tree = new RedBlackTree();


tree.insert(55)
tree.insert(40)
tree.insert(65)
tree.insert(60)
tree.insert(75)
tree.insert(57)
tree.inorder()
console.log(tree.root)

/**
 * ref: https://www.programiz.com/dsa/red-black-tree
 */