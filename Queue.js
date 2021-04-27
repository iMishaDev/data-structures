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
    if (this.tail === this.head)
        return undefined

    let element = this.queue[this.head];
    delete this.queue[this.head];
    this.head +=1;
    return element;
    }
}

module.exports = Queue