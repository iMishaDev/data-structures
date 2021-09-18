
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
        this.next = null;
    }
}


export class LinkedList {


/**
 * @constructor 
 * @param {Node} node 
 */

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

/**
 * @insertLast
 * @param {number} value
 */
    insertLast(value) {
        let node = new Node(value);
        if (!this.head){
            this.head = node;
            this.tail = node
        } else { 
            this.tail.next = node
            this.tail = node
        }
        this.length += 1;
    }


/**
 * @insertFirst
 * @param {number} value
 */
    insertFirst(value) {
        let node = new Node(value);
        if (!this.head){
            this.head = node;
            this.tail = node
        } else { 
            node.next = this.head;
            this.head = node;
        }
        this.length += 1;
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


    static reversWithConstantSpace(head){
        let prev = null, current = head, temp = null
        while(current){
            temp = current.next;
            current.next = prev
            prev = current
            current = temp
        }
        return prev
    }



    reverse(){
        let stack = [];
        let current = this.head;

        while(current){
            stack.push(current);
            current = current.next;
        }

        let newHead = stack.pop();
        current = newHead;
        while(stack.length){
            let node = stack.pop();
            current.next = node;
            current = current.next;
        }
        current.next = null;

        this.head = newHead;
        this.tail = current;
    }

    indexOf(value){
        let current = this.head;
        let i = 0;

        while(current !== null){
            if(current.value === value)
                return i;
            i +=1;
            current = current.next;
        }

        return -1;
    }


    contains(element){
        let current = this.head;

        while(current !== null){
            if(current.value === element)
                return true;
            current = current.next;
        }

        return false;
    }

    deleteFirst(){
        let node = this.head.next;
        this.head.next = null;
        this.head = node;
        this.length -= 1;
    }

    deleteLast(){
        let current = this.head;

        while(current.next.next){
            current = current.next;
        }
        this.tail = current;
        current.next = null;
        this.length -= 1;
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

                this.length -= 1;
            } else {
                    prev = current;
                    current = current.next;
            }

            if (current === null){
                return this.head;
            }
        }
        
    }

    size(){
        return this.length;
    }

    isPalindrome(head=this.head){
        let current = head, stack = [], isPalindrome = true;
        while(current){
            stack.push(current.value)
            current = current.next
        }

        current = head
        while(current){
            if (stack.pop() !== current.value){
                isPalindrome = false;
                break;
            }
            current = current.next
        }
        return isPalindrome;
    }

    removeKth(k){
        let current = this.head;
        let toBeDeleted = this.head;
        let prev = toBeDeleted;

        while(k){
            current = current.next;
            k -= 1;
        }

        while(current){
            prev = toBeDeleted;
            toBeDeleted = toBeDeleted.next;
            current = current.next;
        }

        prev.next = toBeDeleted.next;
        toBeDeleted.next = null;

        return this.head;

    }

    
    removeKthElement(k){
        let behind = this.head, forward = this.head, prev = this.head

        while(k-1){
            forward = forward.next
            k--;
        }
        console.log(forward)

        while(forward){
            prev = behind
            forward = forward.next
            behind = behind.next
        }
        prev.next = behind.next

        return this.head
    }

    toArray(){
        let array = [];
        let current = this.head;

        while(current){
            array.push(current.value);
            current = current.next;
        }

        return array;
    }

    print() {
        let current = this.head;

        while(current){
            console.log(current.value)
            current = current.next;
        }
    }
}
// module.exports = List

/**
 * @tutorial LinkedList  
 */

// let list1 = new LinkedList()
// let list2 = new LinkedList()
// let list = new LinkedList()

// list1.insertLast(1)
// list1.insertLast(2)
// list1.insertLast(3)
// list1.insertLast(4)

// console.log(list1.reverse())
// console.log(list1.size());
// console.log(list1.toArray());
// console.log(list1.contains(3));
// console.log(list1.indexOf(3));

// list1.insertFirst(5);
// console.log(list1);

// list1.deleteLast();
// console.log(list1);

// list1.deleteFirst();
// console.log(list1);

// console.log(list1.size());

// console.log(list1.reversWithConstantSpace());

// console.log('removeKthElement', list1.removeKthElement(3))
// list2.insert(7)
// list2.insert(7)
// list2.insert(7)
// let l3 = new List(List.iterativeSum(list1.head, list2.head))
// console.log('Sum two linked lists : ',l3.print())
// let input = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]
// let x = [1,2,3,5,2,1,3,5,4]



// list.sortedInsert(3)
// list.sortedInsert(5)
// list.sortedInsert(6)
// list.sortedInsert(10)
// list.sortedInsert(11)
// list.sortedInsert(12)
// list.sortedInsert(12)
// list.sortedInsert(12)
// list.sortedInsert(12)
// list.sortedInsert(14)
// list.sortedInsert(14)
// list.sortedInsert(1)
// list.sortedInsert(2)
// list.sortedInsert(4)
// list.sortedInsert(5)
// list.sortedInsert(20)
// list.sortedInsert(21)
// list.sortedInsert(22)
// list.sortedInsert(22)
// list.sortedInsert(22)
// list.sortedInsert(22)
// list.sortedInsert(54)
// list.sortedInsert(94)
// list.sortedInsert(1111)
// list.sortedInsert(23232)
// list.sortedInsert(23234)
// list.sortedInsert(2323223)
// list.print()

// list.reverse()

// list.print()