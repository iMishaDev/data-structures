class Queue {
    constructor(){
        this.queue = [];
        this.tail = 0;
        this.head = 0;
    }

    enqueue(element) {
        this.queue = [...this.queue, element];
        this.tail = element
    }

    size() {
        return this.queue.filter((element) => element !== null).length
    }

    peek(){
        return this.queue[this.head];
    }

    dequeue() {

    let element = this.queue.shift();
    this.head +=1;
    return element;
    }
}

module.exports = Queue