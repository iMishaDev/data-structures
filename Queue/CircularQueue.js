/**
 * Implementation of Circular Queue 
 */

class CircularQueue {
        constructor(n){
        this.queue = new Array(n);
        this.tail = -1;
        this.head = -1;
        
    }

    enqueue(element) {
        if((this.tail + 1) % this.queue.length === this.head)
            return 'Queue is full';
        

        if(this.tail == -1){
            this.tail += 1;
            this.head = this.tail;
            this.queue[this.tail] = element;
        } else {
            this.tail = (this.tail + 1) % this.queue.length;
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
        if(this.head === -1)
            return 'Queue is empty'
        
        let element = this.queue[this.head];
        delete this.queue[this.head];
        if(this.head === this.tail){
            this.head = -1;
            this.tail = -1;
        }else {
            this.head =  (this.head + 1) % this.queue.length ;
        }
        return element;
    }
}



let queue = new CircularQueue(5);

console.log(queue.enqueue(1))
console.log(queue.enqueue(2))
console.log(queue.enqueue(3))
console.log(queue.enqueue(4))
console.log(queue.enqueue(5))
console.log(queue.enqueue(6))
console.log(queue.size())

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.queue)
console.log('size',queue.size())
