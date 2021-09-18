
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


class List {


/**
 * @constructor 
 * @param {Node} node 
 */

    constructor(node = null) {
        this.head = node
        this.tail = node
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

    static reverswithConstantSpace(head){
        let prev = null, current = head, temp = null
        while(current){
            temp = current.next;
            current.next = prev
            prev = current
            current = temp
        }
        return prev
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

	static sum(head1, head2){
			return this.#sumHelper(head1, head2, 0)
	}

	static #sumHelper(head1, head2, carry){
		let sum = head1.value + head2.value + carry
        let c = Math.floor(sum/10);
		let node = new Node(sum%10)
        if(head1.next || head2.next){
            if(head1.next === null) head1.next = new Node(0)
            if(head2.next === null) head2.next = new Node(0)
            node.next = this.#sumHelper(head1.next, head2.next,c)
        } else if (carry) node.next = new Node(carry)
        return node;
	}

    static iterativeSum(head1, head2){
        let current1 = head1, current2 = head2, carry = 0, sum = 0, root=null,iterator = root;
        while(current1 || current2){
            sum = current1.value + current2.value  + carry;
            let node = new Node(sum % 10);
            carry = Math.floor(sum / 10)
            if(iterator) { iterator.next = node; iterator = iterator.next}
            else root = iterator = node;
            if (current1.next || current2.next){
                if(current1.next === null) current1.next = new Node(0)
                if(current2.next === null) current2.next = new Node(0)
            }
            current1 = current1.next;
            current2 = current2.next;
            }
            if(carry) iterator.next = new Node(carry)
            return root
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
 * @tutorial List  
 */

let list1 = new List()
// let list2 = new List()
// let list = new List()

list1.insertLast(1)
list1.insertLast(2)
list1.insertLast(3)
list1.insertLast(4)

console.log(list1.contains(3));
console.log(list1.indexOf(3));

list1.insertFirst(5);
console.log(list1);

list1.deleteLast();
console.log(list1);

list1.deleteFirst();
console.log(list1);


// console.log('removeKthElement', list1.removeKthElement(3))
// list2.insert(7)
// list2.insert(7)
// list2.insert(7)
// let l3 = new List(List.iterativeSum(list1.head, list2.head))
// console.log('Sum two linked lists : ',l3.print())
// let input = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]
// let x = [1,2,3,5,2,1,3,5,4]


// console.log('Sum   : ', List.reverswithConstantSpace(list1.head))

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