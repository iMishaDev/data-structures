/**
 * Implementation of Regular Queue 
 */

class Queue {
    constructor(n){
        this.queue = new Array(n);
        this.tail = -1;
        this.head = -1;
        
    }

    enqueue(element) {
        if(this.tail === this.queue.length -1)
            return 'queue is full!';

        if(this.tail == -1){
            this.tail += 1;
            this.head = this.tail;
            this.queue[this.tail] = element;
        } else {
            this.tail += 1;
            this.queue[this.tail] = element;
        }
    }

    size() {
        return this.tail - this.head + 1;
    }

    peek(){
        return this.queue[this.head];
    }

    dequeue() {
        if(this.tail === this.head === -1)
            return 'Queue is Empty';
        
        let element = this.queue[this.head];
        delete this.queue[this.head];
        
        if( this.head + 1 === this.queue.length){
            this.head = -1;
            this.tail = -1;
        } else {
            this.head += 1;
        }

        return element;
    }
}

let queue = new Queue(5);

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(6)
console.log(queue.size())
console.log(queue.queue)
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue.head, queue.tail)
console.log(queue.queue)
console.log(queue.size())
queue.enqueue(5)
queue.enqueue(6)
console.log(queue.head, queue.tail)
console.log(queue.queue)
// module.exports = Queue