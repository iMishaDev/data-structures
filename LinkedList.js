
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

    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}


class List {


/**
 * @constructor 
 * @param {Node} node 
 */

    constructor(node) {
        this.head = null
        this.tail = null
    }

/**
 * @insert 
 * @param {number} value
 */
    insert(value) {
        let temp = this.head;
        this.head = new Node(value)
        temp.prev = this.head
        this.head.next = temp
    }

    sortedInsert(value, head=this.head) {
        let current = head; 
        let newNode = new Node(value)
        if(head === null) return this.head = newNode
        
        while(current.value < value){
            if(current.next === null) {
                current.next = newNode
                newNode.prev = current
                return head
            } else if(current.next.value >= value) {
                
                newNode.next = current.next
                newNode.prev = current
                
                current.next.prev = newNode
                current.next = newNode
                return head
            }
            else current = current.next;
        } if(current.value > value){
            current.prev = newNode
            newNode.next = current
            this.head = newNode
        }
        return head; 
}


reverse(head=this.head) {
    let current = head
    let stack = [];
    let h = []

    while(current !== null ){
        stack.push(current)
        current = current.next
    }
    while(stack.length){
        let node = stack.pop()
        node.next = null
        node.prev==null
        if(h.length===0) {
            h.push(node)
        } else {
            h[h.length-1].next = node
            node.prev = h[h.length-1]
            h.push(node)
        }
    }
    this.head = h[0]

}


/**
 * @delete 
 * @param {number} value 
 */
    delete(value){
        let current = this.head;
        let prev = null;

        while(current !== null){
            console.log(current)
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

let list = new List()

list.sortedInsert(47)
list.sortedInsert(94)
list.sortedInsert(3)
list.sortedInsert(3)
list.sortedInsert(3)
list.sortedInsert(3)
list.sortedInsert(5)
list.sortedInsert(6)
list.sortedInsert(10)
list.sortedInsert(11)
list.sortedInsert(12)
list.sortedInsert(12)
list.sortedInsert(12)
list.sortedInsert(12)
list.sortedInsert(14)
list.sortedInsert(14)
list.sortedInsert(1)
list.sortedInsert(2)
list.sortedInsert(4)
list.sortedInsert(5)
list.sortedInsert(20)
list.sortedInsert(21)
list.sortedInsert(22)
list.sortedInsert(22)
list.sortedInsert(22)
list.sortedInsert(22)
list.sortedInsert(54)
list.sortedInsert(94)
list.sortedInsert(1111)
list.sortedInsert(23232)
list.sortedInsert(23234)
list.sortedInsert(2323223)
list.print()

list.reverse()

list.print()
