/***
 * Implement Dequeue 
 */

class Dequeue {
    constructor(size){
        this.queue = new Array(size);
        this.front = -1; 
        this.rear = - 1;
        this.size = size;
    }


    pushFront(element){
        if((this.front == 0 && this.rear == this.size-1) || (this.front == this.rear + 1))  
            return 'Queue is full'
        if(this.front < 0 && this.rear < 0){
            this.front += 1;
            this.rear += 1;
        } else if(this.front === 0){
            this.front = this.size - 1;
        } else this.front -= 1;


        this.queue[this.front] = element;
    }

    pushBack(element){
        if((this.front == 0 && this.rear == this.size-1) || (this.front == this.rear + 1))  
            return 'Queue is full'
        if(this.front < 0 && this.rear < 0){
            this.rear += 1;
        } else if(this.rear == this.size -1){
            this.rear = 0;
        } else this.rear += 1;


        this.queue[this.rear] = element;
    }

    popFront(){
        if(this.front == -1 && this.rear == -1)
            return 'Queue is empty'

        
        delete this.queue[this.front];
        
        if(this.front === this.rear){
            this.front = -1;
            this.rear = -1
        }
        else if(this.front === this.size -1){
            this.front = 0
        } else this.front +=1
    }

    popBack(){
        if(this.front == -1 && this.rear == -1)
            return 'Queue is empty'
        
        delete this.queue[this.rear];
        
        if(this.front === this.rear){
            this.front = -1;
            this.rear = -1
        }
        else if(this.rear == 0){
            this.rear = this.size - 1;
        } else this.rear -= 1;

    }

    getFront(){
        return this.front;
    }

    getRear(){
        return this.rear;
    }


    isFull(){
        return (this.front == 0 && this.rear == this.size-1) || (this.front == this.rear + 1);
    }

    isEmpty(){
        return this.front == -1 && this.rear == -1
    }
}


let queue = new Dequeue(5);
console.log(queue.pushFront(2))
console.log(queue.pushFront(1))
console.log(queue.pushBack(3))
console.log(queue.pushBack(5))
console.log(queue.pushBack(8))
console.log('getFront', queue.getFront())
console.log('getRear',queue.getRear())



console.log(queue.queue) 
console.log(queue.popFront())
console.log(queue.popBack())
console.log('getFront', queue.getFront())
console.log('getRear',queue.getRear())
console.log(queue.popBack())
console.log(queue.popBack())
console.log(queue.popBack())
console.log(queue.popBack())
console.log('getFront', queue.getFront())
console.log('getRear',queue.getRear())
console.log(queue.queue)
