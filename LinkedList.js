
/**
 * Linked List is a linear value structure which consists of group of nodes in a sequence.
 * Each node holds its own value and the address of the next node hence forming a chain like structure.
 * Linked Lists are used to create trees and graphs.
 */


class Node {

/**
 * @constructor 
 * @param {number} value 
 * @param {object} prevNode 
 * @param {object} nextNode 
 */

    constructor(value, prevNode,nextNode){
        this.value = value;
        this.prev = prevNode;
        this.next = nextNode;
    }
}


class List {


/**
 * @constructor 
 * @param {Node} node 
 */

    constructor(node) {
        this.head = node
        this.tail = null
    }

/**
 * @insert 
 * @param {number} value
 */
    insert(value) {
        let temp = this.head;
        this.head = new Node(value, null, temp)
        temp.prev = this.head
    }

/**
 * @delete 
 * @param {number} value 
 */
    delete(value){
        let current = this.head;
        let prev = null;

        while(current !== null){
            if(current.value === value){
                if(current.value === this.head.value){

                    this.head = this.head.next;
                    current = this.head;
                } else {
                    prev.next = current.next;
                    current = current.next;
                    current.prev = prev;
                    }
            } else {
                    prev = current;
                    current = current.next;
            }

            if (current === null){
                return this.head;
            }
        }
    }


    print() {
        let current = this.head;

        while(current !== null){
            console.log(current.value)
            current = current.next;
        }
    }
}


/**
 * @tutorial List  
 */

let node1, node2,node3,node4 = null;
node4 = new Node(4,null,null)
node3 = new Node(3,null,node4)
node2 = new Node(2,null,node3)
node1 = new Node(1,null,node2)
node4.prev = node3;
node3.prev = node2;
node2.prev = node1;

let list = new List(node1)

list.delete(3)
list.insert(50)
list.insert(100)
list.print()


