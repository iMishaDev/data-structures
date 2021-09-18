import {LinkedList} from '../LinkedList.js';


class ExtendedLinkedList extends LinkedList {
    printMiddle(){
        let current = this.head;
        let size = 0;

        while(current){
            size += 1;
            current = current.next;
        }
        
        current = this.head;
        let i = 1;
        let target = Math.ceil(size/2);

        while(i < target){
            current = current.next;
            i += 1;
        }

        if(size % 2 === 0){
            return [current.value, current.next.value];
        } else {
            return [current.value];
        }
    }


    printMiddleV2(){
        let current = this.head;
        let mid = this.head;

        while(current != this.tail && current.next !== this.tail){
            mid = mid.next;
            current = current.next.next;
        }

        if(current === this.tail){
            return [mid.value];
        } else {
            return [mid.value, mid.next.value];
        }
    }

    hasLoop(){
        let visited = {};
        let current = this.head;

        while(current){
            if(!visited[current.value])
                visited[current.value] = 1;
            else return true;
            current = current.next;
        }

        return false;
    }


    hasLoopV2(){
        let current = this.head;
        let slow = this.head;

        while(current && current.next !== null){
            slow = slow.next;
            current = current.next.next;

            if(slow == current)
                return true
        }

        return false;
    }
}



let list1 = new ExtendedLinkedList()
list1.insertLast(1)
list1.insertLast(2)
list1.insertLast(3)
console.log(list1.printMiddle())
list1.insertLast(4)
list1.insertLast(5)
list1.insertLast(6)
console.log(list1.printMiddle())
console.log(list1.hasLoop())
console.log(list1.hasLoopV2())

let list2 = new ExtendedLinkedList()
list2.insertLast(1)
list2.insertLast(2)
list2.insertLast(3)
console.log(list2.printMiddleV2())
list2.insertLast(4)
list2.insertLast(5)
list2.insertLast(6)
list2.tail.next = list2.head;
console.log(list2.printMiddleV2())
console.log(list2.hasLoop())
console.log(list2.hasLoopV2())